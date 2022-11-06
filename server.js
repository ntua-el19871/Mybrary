/* express: for our server
   ejs for our template language
   and express-ejs-layouts to make layouts for our html */

/* to start our server \Full Stack Course>npm run devStart */

if(process.env.NODE_ENV !== "production"){ /* to check if we are running the production environment or not */
   require('dotenv').config() /* this is going to load all the variables from the .env file into our process.env variable */
}

const express = require("express") /* import express from our express library that we installed with nmp */
const app = express()
const expressLayouts = require("express-ejs-layouts") /* get the express layouts package that we installed */


/* import router into server */
const indexRouter = require("./routes/index")



app.set('view engine', 'ejs') /* setting the view engine */

app.set("views", __dirname + "/views") /* set where the views are coming from */
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public")) /* for files like images etc */


const mongoose = require("mongoose") /* importing mongoose from the library we installed with >npm i mongoose */
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})   /* seting up the connection to the database */

const db = mongoose.connection    /* to log if there is an error with the connection to the database */
db.on("error", error => console.error(error)) 
db.once("open", () => console.log("Conected to mongoose")) /* once we open if we are connected to the database it will log */

/* now we use the router that we imported */
app.use("/", indexRouter) /* we say what router we want to handle the "/" route */



app.listen(process.env.PORT || 3000)