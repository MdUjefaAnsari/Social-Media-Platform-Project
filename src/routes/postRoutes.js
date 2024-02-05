const express = require('express');
const { getPost, createPost, deletePost, updatePost } = require('../controllers/postController');
const auth = require('../middleware/auth');
const postRoute = express.Router();


postRoute.get('/',auth,getPost)

postRoute.post('/',auth,createPost);

postRoute.delete('/:id',auth,deletePost)

postRoute.put('/:id',auth,updatePost)


module.exports = postRoute;