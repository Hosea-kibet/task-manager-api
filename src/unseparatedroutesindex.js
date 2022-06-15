const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require('./routers/user')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter)



app.post("/users", async (req, res) => {  
  // console.log(req.body)
  // res.send('testing!')
  //const user = new User(req.body);
  //     user.save().then(()=>{
  //         res.status(201).send(user)
  //     }).catch((e)=>{
  //         res.status(400).send(e)
  //     })
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users", async (req, res) => {
  // User.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/users/:id", async (req, res) => {
  // console.log(req.params)
  // User.findById(_id)
  //   .then((user) => {
  //     if (!user) {
  //       return res.status(404).send();
  //     }
  //     res.send(user);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(404).send();
  }


});


app.patch('/users/:id', async (req,res)=>{
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name','email','password','age']
  const isValidOperation = updates.every((update)=>{
    allowedUpdates.includes(update)
  })

  if(!isValidOperation){
    return res.status(400).send({error:"invalid update!"})
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
      if(!user){
        return res.status(404).send
      }
    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})


app.delete('/users/:id', async (req,res)=>{
 try {
  const user =  await User.findByIdAndDelete(req.params.id)
  if(!user){
    return res.status(404).send()
  }
  res.send(user)
 } catch (e) {
   res.status(500).send()
 }
})

app.post("/tasks", async (req, res) => {
  //console.log(req.body);
  // const task = new Task(req.body);
  // task
  //   .save()
  //   .then(() => {
  //     res.status(200).send(task);
  //   })
  //   .catch((e) => {
  //     res.status(404).send(e);
  //   });
  const task = new Task(req.body)
  try {
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e)
  }
});

app.get("/tasks", async (req, res) => {
  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks);
  //   })
  //   .catch((e) => {
  //     res.status(404).send();
  //   });
  
  try {
    const tasks =  await Task.find({})
    res.status(200).send(tasks)
  } catch (e) {
    res.status(500).send(e)
  }
});


app.get("/tasks/:id", async (req, res) => {
  //const _id = req.params.id;
  // console.log(_id);
  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.send();
  //     }
  //     res.send(task);
  //   })
  //   .catch((e) => {
  //     res.status(404).send();
  //   });
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id)
    if(!task){
      return res.status(404).send()
    }
    res.status(200).send(task)
  } catch (e) {
    res.status(500).send(e)
  }
});


app.patch('/tasks/:id', async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
       return res.status(400).send({Error:"Invalid update"})
    }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(!task){
      return res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
  
})

app.delete('/tasks/:id', async (req,res)=>{
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task){
      res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})

app.listen(port, () => {
  console.log("Server is runnng on port " + port);
});
