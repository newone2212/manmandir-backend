const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const calendarEventSchema = Schema({
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

const CalendarEvent = mongoose.model("clalndarEvents", calendarEventSchema);
module.exports = {CalendarEvent};