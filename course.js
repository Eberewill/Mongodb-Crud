const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
.then(console.log("Mogo Db is Connected..."))
.catch(err => console.error("something went wrong", err));

const courseShema = mongoose.Schema({
    name: String,
    
})