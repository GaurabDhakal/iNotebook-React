const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://team_slayers:Suchana69@#@cluster0.0yd3b.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
