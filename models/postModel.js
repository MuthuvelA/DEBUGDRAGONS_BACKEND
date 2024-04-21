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
            type:Number,
        },
        lat:{
            type:Number
        }
    },
    priority:{
        type:Number,
        default:1
    }
});

module.exports = db.model("disasterPosts",postSchema);