const mongoose=require('mongoose')

const noteScheme=new mongoose.Schema({
    title:String,
    description:String,
})

const noteModel= mongoose.model("notes",noteScheme)

module.exports=noteModel