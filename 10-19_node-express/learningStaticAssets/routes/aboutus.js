
// 1 import express
const express = require("express")

const router = express.Router()

router.get("/aboutus", (req, res) => {
    res.send(`
        <link rel="stylesheet" href="/css/styles.css">

        <h1>Hello, World</h1>

        <h4>About Us page</h4>

    `)
})

module.exports = router