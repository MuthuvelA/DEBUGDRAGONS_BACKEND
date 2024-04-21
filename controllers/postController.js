const postService = require('../services/postService');

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
        const {id,name,phoneno} = req.body;
        await postService.assignVolunteer(id,name,phoneno);
        res.status(200).json({message:"assigned Sucessfully....!"}); 
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

exports.deletePost = async(req,res)=>{
    try {
        const {id,name,phoneno} = req.body;
        await postService.deletePost(id,name,phoneno);
        res.status(200).json({message:"deleted sucessfully....!"});
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

exports.getAllPost = async(req,res)=>{
    try {
        const allPost = await postService.getAllPost();
        res.status(200).json({message:allPost});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}