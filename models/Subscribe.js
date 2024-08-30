const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subscribeSchema = Schema({
    mobile : {
        type:Number,
        required:true
    },
    name : {
        type : String,
        required : true
    },
    aarti_time : {
        type:String,
        required:true
    },
    image :{
        type:String,
        default:''
    }
});

const Subscribe = mongoose.model("subscribes", subscribeSchema);
module.exports = {Subscribe};