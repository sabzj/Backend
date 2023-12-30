import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="nav-navbar">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Contact
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          About
        </Nav.Link>
      </div>
    </nav>
  );
}

export default Navbar;
