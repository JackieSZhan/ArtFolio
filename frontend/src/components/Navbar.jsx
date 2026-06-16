import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ artistName }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-name">{artistName}</Link>
      <div className="navbar-links">
        <Link to="/">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;