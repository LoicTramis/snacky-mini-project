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
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
