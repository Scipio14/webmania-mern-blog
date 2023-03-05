const Blog = require('../models/Blog');

const getAll = async (req,res)=>{
  try {
    const blogs = await Blog.find({}).populate("userId","-password")
    return res.status(200).json(blogs)
  } catch (error) {
   return res.status(500).json(error)
  }
}

const getBlog = async(req,res)=>{
  const {id} = req.params
  try{
    const blog = await Blog.findById(id).populate("userId","-password");
    blog.views += 1;
    await blog.save();
    return res.status(200).json(blog);
    
  }catch(error){
    return res.status(500).json(error)
  }
}

const featuredBlogs = async(req,res)=>{
  try {
    const blogs= await Blog.find({featured:true}).populate("userId","-password").limit(3);
    return res.status(200).json(blogs);
  } catch (error) {
      return res.status(500).json(error);
    }
  }
  
const createBlog= async(req,res)=>{
    try{
      const blog = await Blog.create({...req.body,userId:req.user.id});
      return res.status(201).json(blog)
    }catch(error){
      
      return res.status(500).json(error)
    }
  }
  
  const updateBlog = async(req,res)=>{
    const {id} = req.params
    try{
      const blog = await Blog.findById(id);
      // console.log(blog.userId,req.user.id)
      if(blog.userId.toString() !== req.user.id.toString()){
        throw new Error("You can update only your own posts")
      }
      const updatedBlog = await Blog.findByIdAndUpdate(id,{$set:req.body},{new:true}).populate("userId","-password")
      return res.status(200).json(updatedBlog)
    }catch(error){
    return res.status(500).json(error.message)
  }
}

const likeBlog = async(req,res)=>{
 const {id} = req.params
  try {
    const blog = await Blog.findById(id);
    if(blog.likes.includes(req.user.id)){
      blog.likes = blog.likes.filter(userId=>userId !== req.user.id)
      await blog.save();
      return res.status(200).json({msg:"Successfully unliked the blog"})
    }else{
      blog.likes.push(req.user.id)
      await blog.save()
      return res.status(200).json({msg:"Successfully liked the blog"})
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

const deleteBlog = async(req,res)=>{
  const {id} = req.params;
  try {
    const blog = await Blog.findById(id);
    if(blog.userId.toString() !== req.user.id.toString()){
      throw new Error("You can only delete your own posts");
    }else{
      await Blog.findByIdAndDelete(id);
      return res.status(200).json({msg:"Successfully deleted your post"})
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getAll,
  getBlog,
  featuredBlogs,
  createBlog,
  updateBlog,
  likeBlog,
  deleteBlog
}