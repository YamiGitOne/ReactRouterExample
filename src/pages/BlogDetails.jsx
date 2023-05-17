import { useParams, Link } from "react-router-dom";
import {useFetch} from '../hooks/UseFetch'
const BlogDetails = () => {
    const params = useParams();
   
    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if(loading) return <p>Loading data...</p>;
    if(error) return <p>Error data...</p>;

    return (
        <>
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
        <Link to="/blog">Volver a Blogs</Link>
        </>
    )
};

export default BlogDetails;