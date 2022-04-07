import { Link } from "react-router-dom"

function NavBar(){
    return (
        <nav className="navbar">
            <Link to="/" className="btn btn-secondary">Home</Link>
            <Link to="/about" className="btn btn-secondary">About Me</Link>
        </nav>
    )
}

export default NavBar