const dotenv = require('dotenv').config({ path: '../.env' });; 
 
const express = require('express');
const mongoose = require('mongoose');
const blogPostRoutes = require('../routes/blogPosts');
const cors = require('cors');

 
const PORT = process.env.PORT || 5000;

//Create Instance
 const app = express();

//Middlewares
 app.use(express.json());
 app.use(cors());

 app.use((req, res, next) => {
    const date = new Date();
     console.log(`Time:  ${date.toString()}`);
     next();
 })

//Routes
app.use( blogPostRoutes);

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    //Listen for request
    app.listen(PORT, () => {
        console.log(`Server running, Connected to DB, listening on port: ${PORT}`);
    })  
})
.catch((error) => {
    console.log(error);
})

