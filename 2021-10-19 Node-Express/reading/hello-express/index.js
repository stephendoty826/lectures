const http = require("http")

const hostname = "127.0.0.1"
const port = 3000

const express = require("express")
const { response } = require("express")
const app = express()

const server = http.createServer(app)
const db = require("./db")

app.get("/", (req, res)=>{
    res.send("Hello from Express!")
})

app.get("/friends", (req, res)=>{
    res.send("This will be the friends list")
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})

//test


