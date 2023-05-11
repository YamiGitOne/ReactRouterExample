import { Link } from "react-router-dom";
const NotFound = () =>{
    return (
        <>
        <h1>404</h1>
        <Link className="btn btn-outline-primary" to="/">Volver al inicio</Link>
        </>
    );
};

export default NotFound;