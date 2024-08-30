const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://manmandir:5n1LVEL7cilsuVee@manmandir.i2nkjo2.mongodb.net/Temple_DB?retryWrites=true&w=majority", {

}).then (() => {
    console.log("Connection is Successful")
}).catch (() => {
    console.log("No Connection")
})