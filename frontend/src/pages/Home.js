import { useEffect, useState } from "react"

//Components
import BlogPost from "../components/BlogPost"
import BlogPostForm from "../components/BlogPostForm";

const Home = () => {
    const [blogPosts, setBlogPosts] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await fetch('http://localhost:4000')
            const json = await response.json()

            if (response.ok) {
                setBlogPosts(json)
            }
        }
        fetchBlogPosts()
    }, [])

    return (
        <div className="home">
            <BlogPostForm />
            <div className="blogPosts">
                {blogPosts && blogPosts.map((blogPost) => (
                    <BlogPost key={blogPost.id} blogPost={blogPost} />
                ))}
            </div>
            
        </div>
    )
}

export default Home