const express = require("express");
require("./db/mongoose");
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const { json } = require("express");


const app = express();
const port = process.env.PORT 

// const multer = require('multer')

// const upload = multer({
//   dest:'images',
//   limits:{
//     fileSize:1000000
//   },
//   fileFilter(req,file,cb){
    
//     // if(!file.originalname.endsWith('.pdf')){
//       if(!file.originalname.match(/\.(doc|docx)$/)){
//         //return cb(new Error('please upload a pdf')) 
//         return cb(new Error('please upload a word document'))
//       }
     
    
//     cb(undefined,true)

//   }
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//   res.send()
//  },(error,req,res,next)=>{
//   res.status(400).send({error:error.message})
// })


// const upload = multer({
//   dest:'avatar'
// })

//  app.post('/users/me/avatar',upload.single('upload'),(req,res)=>{
//   res.send()
//  })




// app.use((req,res,next)=>{
//   if(req.method==="GET"){
//     res.send('Get requests are disabled')
//   }else{
//     next()
//   }
// })

// app.use((req,res,next)=>{
//   if(req.method==="GET"|| req.method==="POST"|| req.method==="DELETE" || req.method==="UPDATE"){
//       res.status(503).send('The site is under maintenance')
//   } else{
//     next()
//   }
// })


app.use(express.json());
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
  console.log("Server is runnng on port " + port);
});

//const Task = require('./models/task')
//const User = require('./models/user')

//const main =  async () => {
  // const task = await Task.findById("62a5864d13edd12b38a74ff6")
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  //  const user = await User.findById("62a582efda0123052ccb04ad")
  //  await user.populate('tasks').execPopulate()
  //  console.log(user.tasks )

//}
//main()

// const pet = {
//   name:'meow'
// }

// console.log(JSON.stringify(pet))

// const bcrypt = require('bcrypt');
// const e = require("express");

//  const myFunction = async ()=>{
//   const password = 'red1234!'
//   const hashedPassword = await bcrypt.hash(password,8)
//   console.log(password)
//   console.log(hashedPassword)

//   const isMatch = await bcrypt.compare('Red1234!',hashedPassword)
//   console.log(isMatch)

// const jwt = require('jsonwebtoken')
// const token = jwt.sign({_id:'abc123'},'this is my new course',{expiresIn:'7 days'})
// console.log(token)

// const data = jwt.verify(token,"this is my new course")
// console.log(data)

// }

// myFunction()
