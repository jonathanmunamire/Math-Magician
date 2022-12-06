import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <h1>Math Magicians</h1>
    <nav className="links_list">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Navbar;
