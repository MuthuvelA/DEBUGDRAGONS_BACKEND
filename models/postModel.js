const db = require('../config/db');
const { Schema }  = require('mongoose');

const postSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    base64:{
        type:String,
        default:""
    },
    location:{
        long:{
            type:String,
        },
        lat:{
            type:String
        }
    }
});

module.exports = db.model("disasterPosts",postSchema);