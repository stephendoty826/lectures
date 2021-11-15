
const express = require('express');
const app = express()
const port = 3000
const helmet = require('helmet');
const cookieSession = require("cookie-session")

app.set("view engine", "ejs")
app.use(helmet()) // for security with node applications

// body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieSession({
    name: "session",
    keys: ["qpweoriua;lskjdf"],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

const authLogin = (req, res, next) => {
    // check session username
    if(req.session.username){
        next()
    }
    else{
        res.redirect("/login")
    }
}

app.all("/admin/*", authLogin, (req, res, next) => {
    next()
})

app.get("/admin/dashboard", (req, res) => {
    
    res.send("admin page")
})

app.get("/admin/users", (req, res) => {
    
    res.send("admin users page")
})

app.get("/logout", (req, res) => {
    req.session = null

    res.redirect("/login")
})

let users = [
    {username: 'Matt', password: '1234'}, 
    {username: 'Jake', password: '4567'}, 
    {username: 'Brandon', password: '8901'}, 
    {username: 'Jose', password: '1122'} 
]

app.get("/", (req, res) => {
    res.send("home page")
})

app.get("/login", (req, res) => {
    res.render("index")
})

app.post("/login", (req, res) => {
    let {userID, password} = req.body

    let user = users.find(userRecord => {
        return (userRecord.username === userID && userRecord.password === password)
    })

    if(user){
        // set the session
        req.session.username = userID
        
        res.redirect("/")
    }
    else{
        res.redirect("/login")
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})