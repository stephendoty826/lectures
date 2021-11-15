const express = require('express');
const helmet = require('helmet');
const app = express()
const port = 3000

//! application middleware
// req => middleware (express) => res

/**
 * [
 * public,
 * app.all("/")
 * helmet,
 * ["/", "/about"]
 * app.use(error)
 * ]
 */

app.use(express.static("public"))

app.use(helmet())

app.all("*", (req, res, next) => {
    // if route came in on "/", the next router would be app.get("/"...)
    console.log("log some data");
    next()
})

const authLogin = (req, res, next) => {
    let passwordIsValid = false

    if(passwordIsValid){

        console.log("checking password");
        next()
    }
    else{
        // res.redirect("/error") 
        next(new Error("incorrect password"))
    }
}

app.get("/", authLogin, (req, res) => {
    console.log("normal route for homepage");
    res.send("home page")
})

app.use((err, req, res, next) => {
    console.log("error has occurred");

    res.send(`there as an error: ${err}`)
})

// app.get("/error", (req, res) => {
//     res.send("an error occured")
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})