 const mongoose = require("mongoose");
// const validator = require('validator')

mongoose.connect(process.env.MONGOBD_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useCreateIndex: true,
});

// const User = mongoose.model('User',{
//   name:{
//       type:String,
//       required:true,
//       trim:true
//   },
//   email:{
//       type:String,
//       required:true,
//       trim:true,
//       lowercase:true,
//       validator(value){
//           if (!validator.isEmail(value)){
//               throw new Error('Email is invalid')
//           }
//       }
//   },

//   age:{
//       type:Number,
//       default:0,
//       validate(value){
//           if(value<0){
//               throw new Error('Age must be a positive number')
//           }
//       }
//   },
//   password:{
//       type:String,
//       required:true,
//       minlength:7,
//       trim:true,
//       validate(value){
//           if(value.includes('password')){
//               throw new Error('password should not include string password')
//           }
//       },

//   }

// })


// const me = new User({
//   name: " Hosea    ",
//   email: " kibethosea@gmail.com ",
//   password: " bombetette",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required:true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const tsk1 = new Task({
//   description: "Harvesting Maize",
// });

// tsk1
//   .save() 
//   .then(() => {
//     console.log(tsk1);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
