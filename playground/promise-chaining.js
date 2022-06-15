require('../src/db/mongoose')

const User = require('../src/models/user')

// User.findByIdAndUpdate('629669e26fed891cbccedda9',{age:5}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:5})
//     // return User.findByIdAndUpdate('629669e26fed891cbccedda9',{$set:{age:5}})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id,{age:age})
    const count = await User.countDocuments({age})
    return count,user
    
}
updateAgeAndCount('629a679ad219c31ca85c1b2f',2).then((count,user)=>{
    console.log(count)
    console.log(user)
}).catch((e)=>{
    console.log(e)
})
