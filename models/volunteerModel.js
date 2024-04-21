const mongo = require('mongoose');
const db = require('../config/db');

const { Schema } = mongo;

const volunteerSchema = new Schema({
    id:{
        type:String,
        default:""
    },
    username:{
        type:String,
        unique:true
        }
    ,
    name:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    availability:{
        type:Boolean,
        default:true
    },
    phoneno:{
        type:String,
        unique:true
    }
});


module.exports = db.model('volunteerDetails',volunteerSchema);