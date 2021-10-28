
const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(express.static("public"))

// routes
app.use(require("./routes/index"))

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})