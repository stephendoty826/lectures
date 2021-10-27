
const express = require("express")
const port = 3000
const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(require("./routes/index"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
