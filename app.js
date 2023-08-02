require("dotenv").config()
const express = require("express");
const mainRoute = require("./server/routes/main")
const connectDB = require("./server/config/db")

const jwt = require('jsonwebtoken');


const app = express()
const PORT = process.env.PORT || 3000
connectDB();

// Middleware
app.set('view engine', 'ejs'); 
// For Templating - allows the use of html files

app.use(express.static('public'));

app.use('/', mainRoute)
app.use('/', require('./server/routes/admin'))



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
  