import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">&copy; {currentYear} Renz Espedida. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#home" className="text-light text-decoration-none">GitHub</a>
              <a href="#home" className="text-light text-decoration-none">FaceBook</a>
              <a href="#home" className="text-light text-decoration-none">Email</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;