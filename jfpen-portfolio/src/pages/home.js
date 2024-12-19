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
import TypeScript from '../components/img/typescript-plain.svg';
import Bootstrap from '../components/img/bootstrap-original.svg';
import Dart from '../components/img/dart-original.svg';



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

            <section id="about" className="section-spacing">
            <h1>About Me</h1>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Text>
                                        I am a 2020 graduate of Florida Polytechnic University with a passion for technology, games, and penguins, which inspired me to pursue a career in software development. As a generalist software developer, I bring adaptability, creativity, and a strong eagerness to contribute to the industry.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="skills" className="section-spacing">
                <h2>Skills</h2>
                <Container>
                    <Row>
                        <Col md={3} className="text-center">
                            <img src={ReactIcon} alt="React" width="100" height="100" />
                        </Col>
                        <Col md={3} className="text-center">
                            <img src={PythonIcon} alt="Python" width="100" height="100" />
                        </Col>
                        <Col md={3} className="text-center">
                            <img src={JavaIcon} alt="Java" width="100" height="100" />
                        </Col>
                        <Col md={3} className="text-center">
                            <img src={Bootstrap} alt="Bootstrap" width="100" height="100" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} className="text-center">
                            <img src={JavaScript} alt="React" width="100" height="100" />
                        </Col>
                        <Col md={3} className="text-center">
                            <img src={CSS} alt="CSS" width="100" height="100" />
                        </Col>
                        <Col md={3} className="text-center">
                            <img src={TypeScript} alt="TypeScript" width="100" height="100" />
                        </Col>
                        <Col md={3} className="text-center">
                            <img src={Dart} alt="Dart" width="100" height="100" />
                        </Col>
                    </Row>
                </Container>
            </section>


            <section id="projects" className="section-spacing">
                <h2>Projects</h2>
                <Container>
                    <Row>
                        {projectList.map((project, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={project.image} className="Project-Image" />
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


            <section id="contact" className="section-spacing">
                <h2>Contact</h2>
                <Container>
                    <Row>
                        <Col md={10} className="mx-auto">
                            <Form ref={form} onSubmit={sendEmail}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="from_name" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="from_email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message"  rows={3} placeholder="Enter your message" />
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