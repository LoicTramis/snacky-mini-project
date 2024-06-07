import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <input type="text" />
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/addRecipe">Add a recipe</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
