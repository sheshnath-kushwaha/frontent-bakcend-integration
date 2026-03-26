const express=require('express')
const noteModel=require('./models/notes.model')
const cors = require('cors')
const path=require('path')



const app=express()
app.use(cors())

app.use(express.json())
app.use(express.static('./public'))

app.post('/notes/api',async(req,res)=>{
    const {title,description}=req.body

    const notes=await noteModel.create({
        title,description
    })
    res.status(201).json(({
        message:"Notes created successfulyy",
        notes
    }))
})

app.get('/notes/api',async (req,res)=>{
    const notes=await noteModel.find()
    res.status(200).json(({
        message:"Fetches notes successfully"
        ,notes
    }))
})

app.delete('/notes/api/:id',async(req,res)=>{
    const id= req.params.id

    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Notes delete sucessfully",
    })
})


app.patch('/notes/api/:id',async(req,res)=>{
    const id= req.params.id
    const {description}=req.body

    await noteModel.findByIdAndUpdate(id,{description})
    res.status(201).json(({
        message:"update notes successfully"
    }))
})
console.log(__dirname)
app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports=app