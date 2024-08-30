const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const historySchema = Schema({
    title : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    date : {
        type : Date,
        required : true
    }
});

const History = mongoose.model("history", historySchema);
module.exports = {History};