import http from "http"
import express from "express"
import dotenv from 'dotenv'
dotenv.config()



const app = express();
const server = http.createServer(app);

app.get("/",(req, res)=>{
    res.send("h2")
})
app.get("/posts",(req, res)=>{
    res.send({post:hello})
})

server.listen(3000)