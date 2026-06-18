import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ artistName, tagline }) {
  return (
    <nav className="navbar">
      <Link to="/" className="artist-name">{artistName}</Link>
      {tagline && <p className="artist-tagline">{tagline}</p>}
      <div className="navbar-links">
        <Link to="/">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;