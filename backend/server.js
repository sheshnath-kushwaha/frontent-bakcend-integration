const app=require('./src/aap')

const ConnectToDB=require('./src/config/database')
require('dotenv').config()

ConnectToDB()

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})