import { set } from "date-fns";
import { useState } from "react";

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    //const [author, setAuthor] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const blogPost = {
            title,
            content,
            //author,
        }
        const response = await fetch(`http://localhost:4000`, {
            method: 'POST',
            body: JSON.stringify(blogPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        else {
            setError(null)
            setTitle('');
            setContent('');
            //setAuthor('');
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create a new Blogpost</h3>

            <label>BlogPost title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}

            />

            <label>BlogPost content</label>
            <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                rows="4"
                
            />

            <button>Create Post</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default BlogPostForm