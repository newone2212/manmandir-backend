const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mandirSchema = Schema({
    name : {
        type:String,
        required:true,
        unique:true
    },
    description : {
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
    aarti_time : {
        type : Array,
        required : true
    },
    video_id : {
        type:String,
        required:true
    },
    offline_video : {
        type:String,
        required:true
    },
    status : {
        type:String,
        required:true,
        default:"live"
    }
});

const Mandir = mongoose.model("mandirs", mandirSchema);
module.exports = {Mandir};