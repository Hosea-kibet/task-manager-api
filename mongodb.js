//CRUD  create read update delete
// const  mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

// We destrucured the code above
const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to coonect to database!");
    }
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name:'Ratpromax',
    //     age:24
    // },(error,result)=>{
    //     if(error){
    //        return  console.log('unable to add user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:"kiptum",
    //         age:90
    //     },{
    //         name:'sokomo',
    //         age:90
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('unable to add users')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Herd the cattle",
    //       completed: true,
    //     },
    //     {
    //       description: "Cook dinner",
    //       completed: false,
    //     },
    //     // {
    //     //   description: "Deliver milk",
    //     //   completed: true,
    //     // },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable insert tasks");
    //     }
    //     console.log(result.ops);
    //   }
    //);
    //FINDONE
    // db.collection('users').findOne({_id:new ObjectId('628de4bdea67550c4cf7d804')},(error,user)=>{
    //   if(error){
    //     console.log('unable to fetch')
    //   }
    //   console.log(user)
    // })
    //FIND
    // db.collection('users').find({age:24}).toArray((error,users)=>{
    //   console.log(users)
    // })
    // db.collection('users').find({age:24}).count((error,count)=>{
    //   console.log(count)
    // })

    // db.collection('tasks').findOne({_id:new ObjectId('628dfcf8df622802f4dd47f5')},(error,task)=>{
    //   if(error){
    //     console.log('unable to fetch task')
    //   }
    //   console.log(task)
    // })
    // db.collection('tasks').find({completed:false}).toArray((error,completedfalse)=>{
    //   console.log(completedfalse)
    // })
    // db.collection('tasks').find({completed:false}).count((error,completedfalse)=>{
    //   console.log(completedfalse)
    // })

        //UPDATE 
    // db.collection("tasks").updateOne({
    //   _id: new ObjectId("628dfcf8df622802f4dd47f5"),
    // },{
    //    $set:{
    //      description:'Deliver Milk'
    //    }
    //   // $inc:{
    //   //   age:1
    //   // }
    // }).then((result)=>{
    //       console.log(result)
    //   }).catch((error)=>{
    //       console.log(error)
    //   })

          //UPDATE MAny

      // const updatemany= db.collection('tasks').updateMany({
      //   completed:false},
      //   {
      //   $set:{
      //     completed:true
      //   }
      // })
      
      // updatemany.then((result)=>{
      //   console.log(result.modifiedCount)
      // }).catch((error)=>{
      //   console.log(error)
      // })

      //DELETE MANY
      // db.collection('tasks').deleteMany({
      //   descriptio:''
      // }).then((result)=>{
      //   console.log(result)
      // }).catch((error)=>{
      //   console.log(error)
      // })

      //DELETE ONE
      // db.collection('tasks').deleteOne({
      //   completed:false
      // }).then((result)=>{
      //   console.log(result)
      // }).catch((error)=>{
      //   console.log(error)
      // })
  });
