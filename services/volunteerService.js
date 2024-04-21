const volunteerModel=require('../models/volunteerModel');
const queueVolunteer = require('../models/queueVolunteerModel');
const db  = require("../config/db");

class volunteerService{
    static async checkPhone(phoneno){
        try {
            const result = await volunteerModel.findOne({phoneno});
            if(result!=null) throw new Error("Phone number Already taken..!");
            else return; 
        } catch (error) {
            throw error;
        }
    }
    static async login(username,collectionName){
        try {
            const collection = db.collection(collectionName);
            const result = await collection.findOne({username});
            return result;
            
        } catch (error) {
            throw error;
        }
    }
    static async volunteerSignup(name,username,phoneno,password){
        try {
            console.log("sign up Service");
            const createVolunteer = new queueVolunteer({ name, username,phoneno ,password});
            return await createVolunteer.save();
        } catch (err) {
            throw err;
        }
    }

    static async updateVolunteerSetTrue(username){
        try {
            return await volunteerModel.updateOne({username},{$set:{availability:true}});
        } catch (error) {
          throw error;   
        }
    }
    static async updateVolunteerSetFalse(username){
        try {
            return await volunteerModel.updateOne({username},{$set:{availability:false}});
        } catch (error) {
          throw error;   
        }
    }

    static async checkUsername(username){
        try {
            const result = await volunteerModel.findOne({username});
            if(result!=null) throw new Error("Username Not Available");
            else return;
        } catch (error) {
            throw error;
        }
    }
}
module.exports=volunteerService;