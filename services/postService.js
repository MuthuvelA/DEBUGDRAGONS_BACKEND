const post = require('../models/postModel');
const volunteerdetail = require('../models/volunteerModel');

class postService{
    static async addPost(base64Value,Longitude,latitude){
        try {
            const newPost  = new post({id:Date.now(),base64:base64Value,location:{long:Longitude,lat:latitude}});
            return await newPost.save();
        } catch (error) {
            throw error;
        }
    }

    static async deletePost(id,name,phoneno){
        try {
            const volunteer = await volunteerdetail.findOne({name,phoneno});
            if(volunteer.id==id){
                await volunteerdetail.updateMany({id},{$set:{id:"",availability:true}});
                return await post.deleteOne({id});
            }else{
                throw new Error("ID not matched....!");
            }
        } catch (error) {
            throw error;
        }
    }

    static async assignVolunteer(id,name,phoneno){
        try {
            const volunteer = await volunteerdetail.find({name,phoneno});
            if(volunteer[0].availability===true){
                return await volunteerdetail.updateOne({name,phoneno},{$set:{id}});
            }else{
                throw new Error("Already Assigned for the work..!");
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = postService;