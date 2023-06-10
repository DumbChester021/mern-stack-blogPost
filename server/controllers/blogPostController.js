const { default: mongoose } = require('mongoose');
const BlogPost = require('../models/blogPostModel.js');

//Get all blog posts
const getBlogPosts = async (req, res) => {
    const blogPosts = await BlogPost.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogPosts);
    console.log('A Get all Blogpost Request has been made');
}

//Get a specific Blogpost
const getBlogPost = async (req, res) => {
    const { id } = req.params;
    

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'That blogpost does not exist' });
    }
    const blogPost = await BlogPost.findById(id);

    if (!blogPost) {
        return res.status(404).json({ message: 'Blogpost not found' });
    }

    res.status(200).json(blogPost);
    console.log('A Get a specific Blogpost Request has been made');
}

//Post a new Blogpost
const createBlogPost = async (req, res) => {
    const { title, content, author } = req.body;

    //Add a new Blogpost to the DB
    try {
        const blogPost = await BlogPost.create({
            title,
            content,
            author
        })
        res.status(200).json(blogPost);
        console.log('A New Blogpost Post Request has been made');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
//Delete a specific Blogpost
const deleteBlogPost = async (req, res) => {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'That blogpost does not exist' });
    }
    const blogPost = await BlogPost.findByIdAndDelete(id);

    if (!blogPost) {
        return res.status(404).json({ message: 'Blogpost not found' });
    }

    res.status(200).json(blogPost);
    console.log('A Delete a specific Blogpost Request has been made');
}

//Update a specific Blogpost
const updateBlogPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'That blogpost does not exist' });
    }
    blogPost = await BlogPost.findByIdAndUpdate(id, req.body, { new: true });
    if (!blogPost) {
        return res.status(404).json({ message: 'Blogpost not found' });
    }

    res.status(200).json(blogPost);
    console.log('A Update a specific Blogpost Request has been made');
}

module.exports = {
    createBlogPost,
    getBlogPosts,
    getBlogPost,
    deleteBlogPost,
    updateBlogPost
}