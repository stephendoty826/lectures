
const express = require("express")
const router = express.Router()

// retrieve db
const db = require("../models/database")

router.get("/newdish", async (req, res) => {
    try{   
        let results = await db.query('SELECT * FROM categories') // array of objects
        res.render("newdish", {
            categories: results
        })

    }
    catch(err){
        res.render('newdish', {
            categories: []
        })
    }
})



router.post("/newdish", async (req, res) => {
    
    let {name, category, description, price, course, imageURL} = req.body
    
    price = parseFloat(price) // we should parse the values to be the correct ones the database is looking for
    category = parseInt(category)

    // insert a record
    // let result = await db.none(`INSERT INTO menuitem VALUES (DEFAULT, '${name}', '${category}', '${description}', '${price}', '${course}', '${imageURL}')`) // this way is vulerable to SQL injection
    let result = await db.none(`INSERT INTO menuitem (name, category, fooddescription, price, course, imageurl) VALUES($1, $2, $3, $4, $5, $6)`, [name, category, description, price, course, imageURL])
    
    res.redirect("/")

})



module.exports = router