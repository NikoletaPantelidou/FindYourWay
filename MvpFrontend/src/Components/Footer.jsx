import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h4>About Us</h4>
            <div>
              "A European app that tries to offer the best travel experience"
            </div>
          </Col>
          <Col md={3}>
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Contact Us</h4>
            <div>123 Street, City, Country</div>
            <div>Email: info@example.com</div>
            <div>Phone: +123 456 789</div>
          </Col>
        </Row>
      </Container>
      <div className="bottom">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
