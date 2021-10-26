
const express = require('express');
let port = 3000
const app = express()
const socket = require("socket.io")

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

let server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

let io = socket(server)

// listen for messages coming from client via websockets
io.on("connection", (socket) => {
    socket.on("messageFromClient", (clientMessage) => { // listens for incoming chat messages
        io.emit("messageFromServer", clientMessage) // broadcasts back out to all clients
    })
})