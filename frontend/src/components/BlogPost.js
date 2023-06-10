import { format } from 'date-fns';

const BlogPost = ({ blogPost }) => {
    const date = new Date(blogPost.createdAt);
    const formattedDate = format(date, 'Pp');
    return (
        <div className="blogPost">
            <h4>{blogPost.title}</h4>
            <p><i>by:{blogPost.author}</i></p>
            <p>{formattedDate}</p>
            <p>{blogPost.content}</p>
        </div>
    )
}

export default BlogPost
