import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive React portfolio website to showcase my projects and skills. Features modern design with Bootstrap components and smooth navigation.",
      technologies: ["React", "Bootstrap", "CSS"],
      category: "Frontend",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Manager App",
      description: "A simple task management application that allows users to add, edit, delete, and mark tasks as complete. Uses local storage to persist data.",
      technologies: ["JavaScript", "HTML", "CSS", "PHP"],
      category: "Web Application",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts using a public API. Features responsive design and clean user interface.",
      technologies: ["JavaScript", "API Integration", "Bootstrap", "CSS"],
      category: "Frontend",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="display-5 fw-bold text-center text-dark mb-3">My Projects</h2>
            <p className="text-muted text-center mb-4">
              Here are some projects I've built while learning web development
            </p>
            <div className="bg-primary mx-auto" style={{ width: '60px', height: '4px' }}></div>
          </Col>
        </Row>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 d-flex flex-column">
                  <Badge bg="primary" className="mb-3 align-self-start">{project.category}</Badge>
                  <h5 className="fw-bold text-dark mb-3">{project.title}</h5>
                  <p className="text-muted mb-3 flex-grow-1">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        bg="light" 
                        text="dark" 
                        className="me-1 mb-2"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mt-auto">
                    <Button variant="outline-primary" size="sm" className="flex-fill">
                      View Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Student Note */}
        <Row className="mt-5">
          <Col>
            <Card className="border-0 bg-light">
              <Card.Body className="text-center p-4">
                <h6 className="fw-bold text-dark mb-2">More Projects Coming Soon!</h6>
                <p className="text-muted mb-0">
                  I'm continuously working on new projects to expand my skills and portfolio
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;