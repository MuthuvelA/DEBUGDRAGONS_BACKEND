const postService = require('../services/postService');
const volunteerService = require('../services/volunteerService');

exports.addPost =async(req,res)=>{
    try {
        const {base64 , location} = req.body;
        const allPost = await postService.getAllPost();
        const latitude = 0.0009009;
        const longitude =  0.001170;
        var id;
        var isInRnge = false;
        console.log(allPost);
        for(let i=0;i<allPost.length;i++){
            if(location.lat <= allPost[i].location.lat+latitude && location.lat >= allPost[i].location.lat-latitude && location.long<=allPost[i].location.long+longitude && location.long>=allPost[i].location.long-longitude){
                isInRnge = true;
                id = i;
                break;
            }
        }
        if(!isInRnge){
            await postService.addPost(base64,location.long,location.lat);
            console.log("add post ...!");
        }else{
            await postService.updatePost(allPost[id].id,allPost[id].priority+1);
        }
       
        res.status(200).json({status:true,message:"Post Added Sucessfully"});
        
    } catch (error) {
        console.log(error.message);
        res.status(404).json({status:false,message:error.message});
    }
}

exports.assignVolunteer = async(req,res)=>{
    try {
        const {id,username} = req.body;
        await postService.assignVolunteer(id,username);
        res.status(200).json({status:true,message:"assigned Sucessfully....!"}); 
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}

exports.deletePost = async(req,res)=>{
    try {
        const {id,username} = req.body;
        await postService.deletePost(id,username);
        res.status(200).json({status:true,message:"deleted sucessfully....!"});
        
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}

exports.getAllPost = async(req,res)=>{
    try {
        const allPost = await postService.getAllPost();
        console.log(allPost);
        res.status(200).json({status:true,message:allPost});
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}

exports.revokeAvailability = async(req,res)=>{
    try {
        const {username} = req.body;
        await volunteerService.updateVolunteerSetTrue(username);
        res.status(200).json({status:true,message:"revoke sucessfully"});
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}