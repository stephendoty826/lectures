
const express = require("express")
const port = 3000
const app = express()
const db = require("./models/database") // exporting the instance of db

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(require("./routes/index"))
app.use(require("./routes/newDish"))
app.use(require("./routes/hack"))

// const testingDB = async () => {
//     let results = await db.query("SELECT * FROM categories") // array of objects

//     results.forEach(category => {
//         console.log(category.name);
//     })
// }

const insertRecord = async (newCategory) => {
    let results = await db.result(`INSERT INTO categories VALUES (default, '${newCategory}')`)

    console.log(results);
}

// insertRecord('Japanese')

// testingDB()

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
