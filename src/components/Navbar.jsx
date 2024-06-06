import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li className="nav-link">Search</li>
                <Link className="nav-link">Home</Link>
                <Link className="nav-link">About</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
