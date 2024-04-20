const postService = require('../services/postService');

exports.addPost =async(req,res)=>{
    try {
        const {base64 , location} = req.body;
        await postService.addPost(base64,location.long,location.lat);
        res.status(200).json({message:"Post Added Sucessfully"});
        
    } catch (error) {
        res.json({message:error.message});
    }
}

exports.assignVolunteer = async(req,res)=>{
    try {
        const {id,name,phoneno} = req.body;
        await postService.assignVolunteer(id,name,phoneno);
        res.status(200).json({message:"usigned Sucessfully....!"}); 
    } catch (error) {
        res.status(404).json({message:"Unable to assign"});
    }
}