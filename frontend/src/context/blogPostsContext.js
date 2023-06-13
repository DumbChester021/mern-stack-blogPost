import { createContext, useReducer } from "react";


export const BlogPostsContext = createContext();

export const blogPostsReducer = (state, action) => {
    
}

export const BlogPostsContextProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(blogPostsReducer, {
        blogPosts: null,
    })

    return (
        <BlogPostsContext.Provider value={}>
            {children}
        </BlogPostsContext.Provider>
    )
}