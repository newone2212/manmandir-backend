const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = Schema({
    name : {
        type:String,
        required:true
    },
    image : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
});

const Event = mongoose.model("events", eventSchema);
module.exports = {Event};