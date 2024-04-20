const mongo = require('mongoose');
const db = require('../config/db');

const { Schema } = mongo;

const volunteerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    availability:{
        type:Boolean,
        default:true
    },
    skills:{
        type:Array
    },
    phoneno:{
        type:String
    }
});


module.exports = db.model('volunteerDetails',volunteerSchema);