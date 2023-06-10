import { useState } from "react";

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');


    return (
        <form className="create">
            <h3>Create a new Blogpost</h3>

            <label>BlogPost title</label>
            <input>
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}

            </input>

            <label>BlogPost title</label>
            <input>
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                
            </input>
        </form>

    )
}

export default BlogPostForm