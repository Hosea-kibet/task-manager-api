require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.deleteMany({description:"1"})
//   .then((task) => {
//     console.log(task);
//     return Task.findByIdAndUpdate('629a52155f625d0d4860f0c3',{$set:{description:"Diving more into react applying for jobs"}})
//   })
//   .then((updated) => {  
//     console.log(updated);
//   })
//   .catch((e)=>{
//     console.log(e)
//   })

  const deleteTaskAndCount = async (id)=>{
    const deletetask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count

  }
    deleteTaskAndCount('629a679ad219c31ca85c1b2f').then((count)=>{
      console.log(count)
    }).catch((e)=>{
      console.log(e)
    })
