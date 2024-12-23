import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';



function Navigantion() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="custom-navbar"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">Tanmay Vig</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link href="#hero" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link href="#achievements" onClick={handleNavClick}>Achievements</Nav.Link>
            <Nav.Link href="#experience" onClick={handleNavClick}>Experience</Nav.Link>
            <Nav.Link href="#tools" onClick={handleNavClick}>Tools</Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick}>Projects</Nav.Link>
            <Nav.Link href="#positions" onClick={handleNavClick}>Positions</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigantion;