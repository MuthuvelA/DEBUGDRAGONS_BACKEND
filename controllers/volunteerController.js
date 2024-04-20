const volunteerService = require('../services/volunteerService');

 exports.register = async(req,res) =>{
    try{
        console.log("controller");
        const {name,username,phoneno,password} = req.body;
        console.log(name,username,phoneno,password);
        await volunteerService.volunteerSignup(name,username,phoneno,password);
        res.json({status:true,message:"successfully registered....!"});
        
    }catch(err){
       res.json({status:false,message:"Volunteer Not registered...!"});
    }
};


exports.updateAvailabilityFalse = async(req,res)=>{
    try {
        const {username} = req.body;
        await volunteerService.updateVolunteerSetFalse(username);
        res.json({status:true,message:"update Sucessfully....!"});
        
    } catch (error) {
        res.json({status:false,message:"Volunteer is not updated"});
    }
}

exports.updateAvailabilityTrue = async(req,res)=>{
    try {
        const {username} = req.body;
        await volunteerService.updateVolunteerSetTrue(username);
        res.status(200).json({message:"update Sucessfully...!"});

        
    } catch (error) {
        res.status(404).json({status:false,message:"Volunteer is not updated"});
    }
}

exports.login = async(req,res)=>{
    try {
        console.log("hello");
        const {username , password , isAdmin} = req.body;
        const collectionName = (isAdmin?"adminDetails":"volunteerdetails");
        const result = await volunteerService.login(username,collectionName);
        if(result==null){
            res.status(404).json({status:false,message:"username not found..!"});
        }else{
            if(result.password===password){
                res.status(200).json({status:true,message:"login Sucessfully...!",phoneno:result.phoneno});
            }else{
                res.status(404).json({status:false,message:"password not match...!"});
            }
        }        
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}


exports.checkPhone = async(req,res)=>{
    try {
        const {phoneno} = req.body;
        await volunteerService.checkPhone(phoneno);
        res.status(200).json({message:"valid phone number..!"});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

exports.checkUsername = async(req,res)=>{
    try {
        await volunteerService.checkUsername(req.body.username);
        res.status(200).json({message:"username Available"});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}