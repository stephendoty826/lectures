
const express = require('express');
const port = 3001

const app = express() // return an object with methods

// get, post, put, patch, delete - these are http verbs - they represent the category of the request
// app.get("path", "cb")

app.get("/", (req, res)=>{

    res.send("Hello World!")

})

// route about us
app.get("/aboutus", (req, res)=>{
    res.send("about us page")
})

// current time
app.get("/currenttime", (req, res)=>{
    let date = new Date()
    res.send(`It's currently: ${date}`)
})

//data
//res.json
app.get("/data", (req, res)=>{
    let students = [
        {
            fName: "Victoria",
            city: "Atlanta"
        }, 
        {
            fName: "Andrew",
            city: "Atlanta"
        },
        {
            fName: "Stephen",
            city: "Houston"
        },
        {
            fName: "James",
            city: "Austin"
        },
        {
            fName: "Matt",
            city: "Seattle"
        },
    ]
    res.json(students)
})

app.get("/cats(/fancy)?", (req, res)=>{
    res.send("cats")
})

app.get("/bat(wo)?*man", (req, res)=>{
    res.send("bats")
})

app.get("/contact", (req, res)=>{
    let userName = req.query.name
    let lName = req.query.lname
    res.send(`<h1>Contact: ${userName} ${lName}</h1>`)
})

app.get("/contact/:name/:lname", (req, res)=>{
    let name = req.params.name
    let lName = req.params.lname
    res.send(`<h1>Contact: ${name} ${lName}</h1>`)
})

app.get("/flights/:from-:to", (req, res)=>{
    res.send(`
        <b>Departing</b>: ${req.params.from}
        <br>
        <br>
        <b>Arriving</b>: ${req.params.to}
    `)
})

app.get("/add/:num1-:num2", (req, res)=>{
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    res.send(`
        <h1>Addition of:</h1>
        <h2>${num1} + ${num2} = ${num1 + num2}</h2>
    `)
})

// //Ryan's answer
// app.get("/add/:num1/:num2", (req, res) => {
//     let sum = parseInt(req.params.num1) + parseInt(req.params.num2)
//     res.send(`${sum}`)
// })

let data = {data: [{
        id: 0,
        name: "Golden Retriever",
        
        img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
    },
    {
        id: 1,
        name: "Lab",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
    },
    {
        id: 2,
        name: "pug",
        img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
    },
    {
        id: 3,
        name: "poodle",
        img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
    }
]}

function navbar(){
    let nav = ""
    for(dog of data.data){
        nav += `<li><a href="/dogs/${dog.id}">${dog.name}</a></li>`
    }
    return (`<ul>${nav}</ul>`)
}

let nav = navbar()

// let nav = `

// <ul>
//     <li><a href="/dogs/0">Golden Retriever</a></li>
//     <li><a href="/dogs/1">Labs</a></li>
//     <li><a href="/dogs/2">Pug</a></li>
//     <li><a href="/dogs/3">Poodle</a></li>
// </ul>
// `

app.get("/dogs/:id", (req, res)=>{
    let id = req.params.id

    res.send(`

        ${nav}
        <h1>${data.data[id].name}</h1>
        <img src="${data.data[id].img}" height="300px">
    `)
})

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
})
