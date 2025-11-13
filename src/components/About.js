import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="display-5 fw-bold text-center text-dark mb-3">About Me</h2>
            <div className="bg-primary mx-auto" style={{ width: '60px', height: '4px' }}></div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="fw-bold text-dark mb-3">My Journey</h4>
                <p className="text-muted">
                  I'm a passionate Computer Science student currently pursuing my degree while building 
                  practical skills in web development. I love turning ideas into functional applications 
                  and continuously learning new technologies.
                </p>
                <p className="text-muted">
                  Through coursework and personal projects, I've developed a strong foundation in 
                  modern web technologies and I'm excited to apply my knowledge to real-world challenges.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="fw-bold text-dark mb-3">What I Do</h4>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2">Full-stack web application development</li>
                  <li className="mb-2">API development and integration</li>
                  <li className="mb-2">Database design and optimization</li>
                  <li className="mb-2">Performance optimization</li>
                  <li className="mb-2">Code review and best practices</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;