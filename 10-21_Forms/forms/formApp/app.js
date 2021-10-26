
const express = require('express');
const port = 3000
const app = express()

// these 2 lines are needed to parse form data off of the header
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// these 2 lines defines req.body and allows us to pull information from headers when the form is submitted


app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", (req, res) => {

    // let fName = req.body.firstName // this way is fine but we can also use destructuring as shown below
    // let lName = req.body.lastName

    let {firstName, lastName} = req.body

    console.log(req.body);

    res.send(`Your name is ${firstName} ${lastName}.`)
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})