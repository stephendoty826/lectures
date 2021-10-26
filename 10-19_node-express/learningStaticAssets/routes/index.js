
// 1 import express
const express = require('express');

// 2 invoke express router
const router = express.Router() // sub route

router.get("/", (req, res) => {
    res.send("home page")
})

// 3 export handler
module.exports = router