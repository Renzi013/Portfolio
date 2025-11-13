import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="home" className="bg-light py-5" style={{ paddingTop: '100px' }}>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <h1 className="display-4 fw-bold text-dark mb-4">
              Hi, I'm <span className="text-primary">Renz Jasper D. Espedida</span>
            </h1>
            <h2 className="h3 text-muted mb-4">Computer Science Student</h2>
            <p className="lead text-muted mb-4">
              I create beautiful, functional web applications using modern technologies. 
              Passionate about clean code and user experience.
            </p>
            <div className="d-flex gap-3">
              <Button href="#projects" variant="primary" size="lg" className="px-4">
                View My Work
              </Button>
              <Button href="#contact" variant="outline-primary" size="lg" className="px-4">
                Contact Me
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div 
              className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold display-1"
              style={{ width: '300px', height: '300px' }}
            >
              RJ
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;