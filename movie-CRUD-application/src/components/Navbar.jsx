import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="nav-navbar">
        <Link as={Link} to="home">
          Home
        </Link>
        <Link as={Link} to="contact">
          Contact
        </Link>
        <Link as={Link} to="about">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
