
const express = require("express")
const app = express()
const db = require("./models")
const port = 3000

app.set("view engine", "ejs")

app.use(express.static("public"))

// routes
app.use(require("./routes/index"))

// db.user.create({firstName: "Vicky", lastName: "Webber", email: "vickey@dc.com"})
// db.user.create({firstName: "Karen", lastName: "Johnson", email: "karen@dc.com"})
// db.user.create({firstName: "Samantha", lastName: "Bough", email: "samantha@dc.com"})
// db.user.create({firstName: "Sarah", lastName: "Samuelson", email: "sarah@dc.com"})

const findAll = async() => {
    // let records = await db.user.findAll() // array of objects

    // records.forEach(user => {
    //     console.log(`Name: ${user.firstName} ${user.lastName} - Email: ${user.email}`);
    // })

    // let result = await db.user.findByPk(5)
    // console.log(`Name: ${result.firstName} ${result.lastName} - Email: ${result.email}`);

    // let records = await db.user.findAll({where: {firstName: "Sarah"}})
    // records.forEach(user => {
    //     console.log(`Name: ${user.firstName}`);
    // })

    // let deletedID = await db.user.destroy({where: {id: 7}})// this returns either 0 or 1 (0 is false, 1 is true)

    // console.log(deletedID);

    // let update = await db.user.update({lastName: "West"}, {where: {id: 8}}) // this returns either 0 or 1 (0 is false, 1 is true)

    // console.log(update);

    let records = await db.blogs.findAll( {include: [{
        model: db.user, 
        required: true, 
        where: {firstName: 'Matt'}
    }]})

    records.forEach(blog =>{
        console.log(`${blog.title} ${blog.body} ${blog.user.firstName} ${blog.user.lastName}`);
    })

    // let records = await db.user.findAll({include: [{
    //     model: db.blogs,
    //     required: true
    // }]})
    // records.forEach(user => {
    //     console.log(`${user.firstName} ${user.lastName}`);

    //     user.blogs.forEach(blog => {
    //         console.log(`>>>>>${blog.title}`);
    //     })
    // })



} 

findAll()

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})