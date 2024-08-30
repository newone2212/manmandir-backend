const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const admintokenSchema = Schema({
    token : {
        type:String,
        required: true
    },
    _adminId : {
        type:Schema.Types.ObjectId,
        ref:"admins"
    },
    tokenType : {
        type:String,
        enum: ["login", "resetPassword"]
    }
});

const adminToken = mongoose.model("admintokens", admintokenSchema);
module.exports = {adminToken};