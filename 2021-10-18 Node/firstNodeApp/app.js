
// bring in a core module
const http = require("http")

const host = "127.0.0.1"

const port = 2000

// set up a server
const server = http.createServer((request, response) => {
    
    switch(request.url){
        case "/":
            response.setHeader("Content-Type", "text/html")
            response.end("<h1>Hello World</h1>")
            break
        case "/aboutus":
            response.setHeader("Content-Type", "text/html")
            response.end(`<h1>About Us</h1><h2>Learning Node</h2>`)
            break
        case "/currenttime":
            response.setHeader("Content-Type", "text/html")
            let date = new Date
            response.end(`Time is: ${date}`)
            break
        case "/data":
            response.setHeader("Content-Type", "application/json")
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
        let studentsJSON = JSON.stringify(students)
        response.end(studentsJSON)
            break
        default:
            break
    }
})

// start server
server.listen(port, () => {
    console.log("Server is running on port 3000");
})