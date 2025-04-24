import { useState } from "react";
// import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      {/* Hamburger Button */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Header;
