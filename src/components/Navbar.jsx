import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <input type="text" />
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/addRecipe">Add a recipe</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
