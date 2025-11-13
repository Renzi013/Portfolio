import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="display-5 fw-bold text-center text-dark mb-3">Get In Touch</h2>
            <p className="text-muted text-center mb-4">
              Feel free to reach out - I'd love to connect!
            </p>
            <div className="bg-primary mx-auto" style={{ width: '60px', height: '4px' }}></div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow text-center">
              <Card.Body className="p-5">
                <h4 className="fw-bold text-dark mb-4">Let's Connect!</h4>
                <p className="text-muted mb-4">
                  I'm always open to discussing new opportunities, projects, or just having a chat about technology.
                </p>
                
                <Row className="g-4 mt-4">
                  <Col md={6}>
                    <div className="p-4">
                      <h5 className="fw-bold text-dark">Email</h5>
                      <p className="text-muted mb-2">Drop me a line anytime</p>
                      <a href="mailto:john.doe@email.com" className="text-primary fw-semibold text-decoration-none">
                        espedida13@gmail.com
                      </a>
                    </div>
                  </Col>
                  
                  <Col md={6}>
                    <div className="p-4">
                      <h5 className="fw-bold text-dark">Phone</h5>
                      <p className="text-muted mb-2">Let's have a conversation</p>
                      <a href="tel:+15551234567" className="text-primary fw-semibold text-decoration-none">
                        09686087900
                      </a>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;