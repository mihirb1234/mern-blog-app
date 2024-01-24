const blogModel=require('../models/blog.model.js')

exports.getAllBlogsController=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:'error while getting blogs',
            success:false,
        })
    }
}
exports.createBlogController=()=>{
    
}
exports.updateBlogController=()=>{
    
}
exports.getBlogByIdController=()=>{
    
}
exports.deleteBlogController=()=>{
    
}