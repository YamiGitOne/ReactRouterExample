import {useFetch} from "../hooks/UseFetch"
const Blog = () =>{
    const {} = useFetch('https://jsonplaceholder.typicode.com/posts')
    return (
        <>
        <h1>Blog</h1>
        </>
    );
};

export default Blog;