const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const adminSchema = Schema({
    first_name : {
        type:String,
        required:true
    },
    last_name : {
        type:String,
        required:true
    },
    mobile :{
        type:Number,
        required:true
    },
    email_id : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type:String,
        required:true
    },
    image :{
        type : String,
        default : ''
    }
});

const Admin = mongoose.model("admins", adminSchema);
module.exports = {Admin};