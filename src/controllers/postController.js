const postModel = require("../models/postModel");

const createPost = async(req,res)=>{
       const {name,dob,gender,description}=req.body;

       const newPost = new postModel({
        name:name,
        dob:dob,
        gender:gender,
        description: description,
        userId: req.userId
       });
       try {
        await newPost.save();
        res.status(201).json(newPost);
       } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
       }
}

const updatePost = async(req,res)=>{
    const id= req.params.id;
    const {name,dob,gender,description}=req.body;

    const newPost = {
        name:name,
        dob:dob,
        gender:gender,
        description: description,
        userId: req.userId
    }
    try {
        await postModel.findByIdAndUpdate(id,newPost,{new:true})
        res.status(200).json(newPost)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }

} 

const deletePost = async(req,res)=>{

    try {
         await postModel.deleteOne({_id: req.params.id});
        res.status(202).json({message:`Successfully deleted!!`})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }
}

const getPost =async(req,res)=>{
    try {
        const posts = await postModel.find({userId:req.userId});
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }
}

module.exports={
    createPost,
    updatePost,
    deletePost,
    getPost
}