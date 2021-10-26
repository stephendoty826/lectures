const http = require("http")

const hostname = "127.0.0.1"
const port = 3000

const express = require("express")
const app = express()

const server = http.createServer(app)

app.get("/", (req, res)=>{
    res.send("Hello from home page! This is great!")
})

app.get("/sith", (req, res)=>{
    let htmlString = ""
    htmlString = "<h1>Welcome to the Dark Side</h1>"
    htmlString += "<h3>We have cookies!!!</h3>"
    htmlString += "<p>If you don't want to be here, click the link below.</p>"
    htmlString += "<a href='/lightside'>Light Side</a>"
    res.send(htmlString)
})

app.get("/lightside", (req, res)=>{
    let htmlString = "<h1>Welcome to the Light Side</h1>"
    htmlString += "<h3>We have brownies!!!</h3>"
    htmlString += "<p>If you don't want to be here, click the link below.</p>"
    htmlString += "<a href='/sith'>Dark Side</a>"
    res.send(htmlString)
})




server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
