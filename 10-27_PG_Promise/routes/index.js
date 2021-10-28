
const express = require("express")
const router = express.Router()
const db = require("../models/database")

router.get("/", async (req, res) => {
    let results = await db.query(`SELECT * FROM menuitem`)
    res.render("index", {
        menu: results
    })
})

module.exports = router