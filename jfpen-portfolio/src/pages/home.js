import React, { useRef } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../App.css';
import Base32h from '../components/img/Base32H.png';
import PenguinIcon from '../components/img/logoPic192.png';
import HelmGif from '../components/img/helm-demo-3.gif';
import ReactIcon from '../components/img/react-original.svg';
import PythonIcon from '../components/img/python-original.svg';
import JavaIcon from '../components/img/java-original.svg';
import JavaScript from '../components/img/javascript-plain.svg';
import CSS from '../components/img/css3-original.svg';



function Home() {  
    const projectList = [
        { image: PenguinIcon, name: 'PenguinPedia', description: 'A penguin encyclopedia', link: 'https://github.com/JamesFloyd-Pen/PenguinPedia-Website' },
        { image: HelmGif, name: 'Helm', description: 'A project management tool', link: 'https://github.com/JamesFloyd-Pen/Helm' },
        { image: Base32h, name: 'Base32h', description: 'A base32 encoder/decoder', link: 'https://github.com/JamesFloyd-Pen/base32h.java' }
      ];

    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z7ucyd9', 'template_idfzvjb', form.current, '3Q0L0FVBQp34r6lmK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div className="App-Background">
            <h1>Home</h1>

            <section id="about">
                <h2>About Me</h2>
                <p>I am a 2020 graduate of Florida Polytechnic University with a passion for technology, games, and penguins, which inspired me to pursue a career in software development. As a generalist software developer, I bring adaptability, creativity, and a strong eagerness to contribute to the industry.
                </p>
            </section>

            <section id="skills">
                <h2>Skills</h2>
                <Container>
                    <Row>
                        <Col md={4} className="text-center">
                        <img src={ReactIcon} alt="React" width="100" height="100" />
                        </Col>
                        <Col md={4} className="text-center">
                        <img src={PythonIcon} alt="Python" width="100" height="100" />
                        </Col>
                        <Col md={4} className="text-center">
                        <img src={JavaIcon} alt="Java" width="100" height="100" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="text-center">
                        <img src={JavaScript} alt="React" width="100" height="100" />
                        </Col>
                        <Col md={4} className="text-center">
                        <img src={CSS} alt="CSS" width="100" height="100" />
                        </Col>
                    </Row>
                    </Container>
            </section>


            <section id="projects">
            <h2>Projects</h2>
            <Container>
            <Row>
                {projectList.map((project, index) => (
                <Col key={index} md={4} className="mb-4">
                    <Card>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">View Project</Button>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Container>
         </section>
                

            <section id="contact">
            <h2>Contact</h2>
            <Container>
            <Row>
                <Col md={6} className="mx-auto">
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
            </Row>
            </Container>
            </section>
        </div>
    );
}

export default Home;