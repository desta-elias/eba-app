import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 8080

app.get('/',(req, res)=>{
    res.send('Hello Eba')
})

app.listen(PORT, ()=>{
    console.log(`Sever running on port:-${PORT}`);
})
