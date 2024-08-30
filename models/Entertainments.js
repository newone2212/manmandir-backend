const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const entertainmentSchema = Schema({
    name : {
        type:String,
        required:true
    },
    filename : {
        type : String,
        required : true
    },
    filePath : {
        type : String,
        required : true
    }
});

const Entertainment = mongoose.model("entertainments", entertainmentSchema);
module.exports = {Entertainment};