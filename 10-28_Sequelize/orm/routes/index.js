
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("home page learning sequelize")
})

module.exports = router