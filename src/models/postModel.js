const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
     description:{
        type:String,
        required:true
    },
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model("Post",PostSchema);