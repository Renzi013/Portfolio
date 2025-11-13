import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "REST APIs", "Python", "Java"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "VS Code", "Figma", "Postman", "NPM"]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="display-5 fw-bold text-center text-dark mb-3">Skills & Technologies</h2>
            <p className="text-muted text-center mb-4">
              Technologies I'm currently learning and working with
            </p>
            <div className="bg-primary mx-auto" style={{ width: '60px', height: '4px' }}></div>
          </Col>
        </Row>
        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-dark mb-4 text-center">{category.title}</h4>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        bg="primary" 
                        className="px-3 py-2 fs-6 fw-normal"
                        style={{ borderRadius: '15px' }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Learning Section */}
        <Row className="mt-5">
          <Col>
            <Card className="border-0 bg-primary text-white">
              <Card.Body className="p-4 text-center">
                <h5 className="fw-bold mb-3">Currently Learning</h5>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  <Badge bg="light" text="dark" className="px-3 py-2">Blockchain</Badge>
                  <Badge bg="light" text="dark" className="px-3 py-2">Next.js</Badge>
                  <Badge bg="light" text="dark" className="px-3 py-2">AI</Badge>
                  <Badge bg="light" text="dark" className="px-3 py-2">AWS</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;