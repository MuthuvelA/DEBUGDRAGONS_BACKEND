const mongo = require('mongoose');
const db = require('../config/db');

const { Schema } = mongo;

const volunteerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    availability:{
        type:String,
        default:true
    },
    skills:{
        type:String
    },
    contactno:{
        type:String
    }
});


const volunteerModel = db.model('volunteerDetails',volunteerSchema);

module.exports = volunteerModel;