const volunteerModel=require('../models/volunteerModel');

class volunteerService{
    static async volunteerSignup(name,skills,phoneno){
        try {
            const createVolunteer = new volunteerModel({ name, skills, phoneno });
            return await createVolunteer.save();
        } catch (err) {
            throw err;
        }
    }

    static async updateVolunteerSetTrue(name,phoneno){
        try {
            return await volunteerModel.updateOne({name,phoneno},{$set:{availability:true}});
        } catch (error) {
          throw error;   
        }
    }
    static async updateVolunteerSetFalse(name,phoneno){
        try {
            return await volunteerModel.updateOne({name,phoneno},{$set:{availability:false}});
        } catch (error) {
          throw error;   
        }
    }
}
module.exports=volunteerService;