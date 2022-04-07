import { Link } from "react-router-dom"

function NavBar(){
    return (
        <nav className="navbar">
            <Link to="/" className="btn btn-dark">Home</Link>
            <Link to="/about" className="btn btn-dark">About Me</Link>
        </nav>
    )
}

export default NavBar