const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken')
const {
  getAll,
  getBlog,
  createBlog,
  updateBlog,
  likeBlog,
  deleteBlog,
  featuredBlogs
} = require('../controllers/blogController')

router.get('/getAll',getAll)
router.get('/find/:id',getBlog);
router.get('/featured',featuredBlogs);
router.post('/',verifyToken,createBlog);
router.put('/updateBlog/:id',verifyToken,updateBlog);
router.put('/likeBlog/:id',verifyToken,likeBlog);
router.delete('/deleteBlog/:id',verifyToken,deleteBlog)

module.exports = router;