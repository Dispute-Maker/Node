// const http = require('http') 

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
   res.send("hello from Home page")
})
app.get('/about',(req,res)=>{
   res.send("hello from About page")
})

// const myServer = http.createServer(app)

app.listen(8000,()=>console.log("Server Started!"))