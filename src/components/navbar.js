import './navbar.css';

const Navbar = () => (
  <header className="navbar">
    <h1>Math Magicians</h1>
    <nav className="links_list">
      <a href="/">Home</a>
      <a href="/calculator">Calculator</a>
      <a href="/quote">Quote</a>
    </nav>
  </header>
);

export default Navbar;
