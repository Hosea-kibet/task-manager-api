const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Task = require("./task");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },

  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("password should not include string password");
      }
    },
  },
  tokens:[{
        token:{
            type:String,
            required:true
        }
  }],
  avatar:{
    type:Buffer
  }
},
{
  timestamps:true
});

UserSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
 }) 

UserSchema.methods.toJSON = function (){
  const user= this
  const userObject= user.toObject()

  delete userObject.password
  delete userObject.tokens
  delete userObject.avatar
return userObject 
}

UserSchema.methods.generateAuthToken = async function (){
    const user = this

    const token = jwt.sign({_id:user._id.toString() },process.env.JWT_ENV)
    user.tokens= user.tokens.concat({token:token})
    await user.save() 
    return token
}

UserSchema.statics.findByCredentials = async (email, password) => {
  const user =  await User.findOne({ email: email });
  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

//Hash the plain text password before saving
UserSchema.pre("save", async function (next) {
  const user = this;
  

  //console.log('just before saving')
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

UserSchema.pre("remove",async function (next){
  const user = this
    await Task.deleteMany({owner:user._id})
  next()
})

const User = mongoose.model("User", UserSchema);
module.exports = User;
