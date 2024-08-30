const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema({
    first_name : {
        type:String,
        required:true
    },
    last_name : {
        type:String,
        required:true
    },
    mobile : {
        type:Number,
        unique : true,
        required:true
    },
    email_id : {
        type : String
    },
    image :{
        type:String,
        default:''
    },
    token:{
        type:String,
        default:''
    },
    subscribe:{
        type:Array
    }
});

const Users = mongoose.model("users", userSchema);
module.exports = {Users};