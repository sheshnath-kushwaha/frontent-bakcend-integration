const mongoose=require('mongoose')


function ConnectToDB(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Conncect to DB")
    })
}

module.exports=ConnectToDB