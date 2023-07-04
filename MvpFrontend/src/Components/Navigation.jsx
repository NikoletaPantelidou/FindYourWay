import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <Navbar className="navbar" bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={`/`}>
            <Navbar.Brand>FindYourWay</Navbar.Brand>
          </Nav.Link>
          <Nav.Link as={Link} to={`/`}>
            Home
          </Nav.Link>
          <Nav.Link>Features</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
