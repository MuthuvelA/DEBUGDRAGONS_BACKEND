const post = require('../models/postModel');
const volunteerdetail = require('../models/volunteerModel');
const db = require('../config/db');

class postService{
    static async addPost(base64Value,Longitude,latitude){
        try {
            const now = new Date();
            const formattedDate = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}${now.getMilliseconds().toString().padStart(3, '0')}`;
            const newPost  = new post({id:formattedDate,base64:base64Value,location:{long:Longitude,lat:latitude}});
            return await newPost.save();
        } catch (error) {
            throw error;
        }
    }

    static async deletePost(id,name,phoneno){
        try {
            const collection = db.collection("adminDetails");
            const isAdmin = (await collection.findOne({name,phoneno})==null);
            if(isAdmin){
                 const volunteer = await volunteerdetail.findOne({name,phoneno});
                 if(volunteer.id==id){
                    await volunteerdetail.updateMany({id},{$set:{id:"",availability:true}});
                    return await post.deleteOne({id});
                }else{
                    throw new Error("ID not matched....!");
                }
            }else{
                await volunteerdetail.updateMany({id},{$set:{id:"",availability:true}});
                return await post.deleteOne({id});
            }
            
        } catch (error) {
            throw error;
        }
    }

    static async assignVolunteer(id,name,phoneno){
        try {
            const volunteer = await volunteerdetail.find({name,phoneno});
            console.log(volunteer);
            if(volunteer[0].availability){
                console.log("inside if : ");
                return await volunteerdetail.updateOne({name,phoneno},{$set:{id,availability:false}});
            }else{
                throw new Error("Already Assigned for the work..!");
            }
        } catch (error) {
            throw error;
        }
    }

    static async getAllPost(){
        try {
            const allPost = await post.find().sort({id:-1});
            return allPost;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = postService;