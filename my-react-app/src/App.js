import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

import { FaPaw } from "react-icons/fa"; // FontAwesome icon


import Home from "./pages/Home";
import CatServices from "./pages/CatServices";
import DogServices from "./pages/DogServices";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";


function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-dark">
            <FaPaw className="me-2" /> PetsGrooming.Co
          </Navbar.Brand>
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center gap-4 text-dark">
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/catservices">
                  Cat Services
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dogservices">
                  Dog Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Button as={Link} to="/booking" variant="primary">
                  Book Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catservices" element={<CatServices />} />
        <Route path="/dogservices" element={<DogServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white mt-auto">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 PetsGrooming.Co. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
