const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const significanceSchema = Schema({
    name : {
        type:String,
        required:true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
});

const Significance = mongoose.model("significance", significanceSchema);
module.exports = {Significance};