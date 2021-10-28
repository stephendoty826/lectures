
const express = require("express")
const router = express.Router()

const db = require("../models/database")

// displays form
router.get("/hack", (req, res) => {
    
    res.render("hack")
})

router.post("/hack", async (req, res) => {
    let results = await db.query(`SELECT * FROM dummy WHERE name='${req.body.name}'`)

    res.json(results)
})

module.exports = router