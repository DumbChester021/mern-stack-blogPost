const express = require('express');

const { 
    createBlogPost,
     getBlogPosts,
      getBlogPost,
       deleteBlogPost,
        updateBlogPost
} = require('../controllers/blogPostController');


const router = express.Router();

//Get all blog posts
router.get('/', getBlogPosts);

//Get a specific Blogpost
router.get('/:id', getBlogPost);

//Post a new Blogpost
router.post('/', createBlogPost);

//Delete a specific Blogpost
router.delete('/:id', deleteBlogPost);

//Update a specific Blogpost
router.patch('/:id', updateBlogPost);


module.exports = router;