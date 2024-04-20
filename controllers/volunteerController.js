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