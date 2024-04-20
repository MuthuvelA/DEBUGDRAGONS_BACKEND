const volunteerService = require('../services/volunteerService');

 exports.register = async(req,res,next) =>{
    try{
        const {name,skills,phoneno} = req.body;
        console.log(name,skills,phoneno);
        const sucessRes = await volunteerService.volunteerSignup(name,skills,phoneno);
        res.json({status:true,message:"successfully registered....!"});
        
    }catch(err){
       res.json({status:false,message:"Volunteer Not registered...!"});
    }
};


exports.updateAvailabilityFalse = async(req,res)=>{
    try {
        const {name,phoneno} = req.body;
        await volunteerService.updateVolunteerSetFalse(name,phoneno);
        res.json({status:true,message:"update Sucessfully....!"});
        
    } catch (error) {
        res.json({status:false,message:"Volunteer is not updated"});
    }
}

exports.updateAvailabilityTrue = async(req,res)=>{
    try {
        const {name,phoneno} = req.body;
        await volunteerService.updateVolunteerSetTrue(name,phoneno);
        res.json({status:true,message:"update Sucessfully...!"});

        
    } catch (error) {
        res.json({status:false,message:"Volunteer is not updated"});
    }
}