
const express = require('express');
const app = express()
const port = 3000
// const homePage = require("./routes/index")

app.use(express.static("public"))

// MVC - Model - Viewer - Controller


// request => express => response

app.use(require("./routes/index"))

app.use(require("./routes/aboutus"))

app.use(require("./routes/data"))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})