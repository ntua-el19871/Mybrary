/* router for root */

const express = require("express")
const router = express.Router()

router.get("/", (req,res)=> {
        
        //res.send("eimai gtp")
        res.render('index')
        console.log("someone is navigating the / route")

    }
)

module.exports = router