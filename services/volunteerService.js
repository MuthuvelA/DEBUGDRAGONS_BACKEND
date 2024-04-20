const volunteerModel=require('../models/volunteerModel');

class volunteerService{
    static async volunteerSignup(name,skills,contactno){
        try {
            const createVolunteer = new volunteerModel({ name, skills, contactno });
            return await createVolunteer.save();
        } catch (err) {
            throw err;
        }

    }
}
module.exports=volunteerService;