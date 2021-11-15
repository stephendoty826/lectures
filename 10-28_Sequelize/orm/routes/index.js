
const express = require("express")
const router = express.Router()
const db = require("../models")

router.get("/", async (req, res) => {
    await db.user.findAll()
    res.send("home page learning sequelize")
})

module.exports = router