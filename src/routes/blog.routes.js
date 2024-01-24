const express=require('express');
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController } = require('../controllers/blog.controller');

const router=express.Router();

//get blogs
router.get('/all-blog',getAllBlogsController);

//post create blogs
router.post('/create-blog',createBlogController);

//put --> update blog

router.put('/update-blog/:id',updateBlogController);

//get single blog GET

router.get('/get-blog/:id',getBlogByIdController)

//delete --> delete blog

router.delete('/delete-blog/:id',deleteBlogController);


module.exports=router
