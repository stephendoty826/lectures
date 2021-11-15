
const express = require('express');
const cookieSession = require("cookie-session");
const app = express()
const port = 3000

// validating cookie info
app.use(cookieSession({
    name: "session", 
    keys: ["qweproiuasd;lfkj"],
    maxAge: 14 * 24 * 60 * 60 * 1000 // 14 days, 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
}))

app.get("/", (req, res) => {
    let fName = "Stephen"

    // place on the session
    req.session.fName = fName
    res.send("home page")
})

app.get("/faq/:name", (req, res) => {
    
    req.session.fName = req.params.name

    // place on the session
    res.send("home page")
})

app.get("/about", (req, res) => {
    res.send(`${req.session.fName}`)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})