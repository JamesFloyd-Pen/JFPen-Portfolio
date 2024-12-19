import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function Footer() {
  return (
    <footer className="Footer-Background text-center py-4">
      <Container>
        <Row>
          <Col>
            <div className="social-media-links mb-3">
              <a href="https://github.com/JamesFloyd-Pen" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                Github
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/james-floyd-2316561a1/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/commanderpip/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                Instagram
              </a>
              <p className="text-black mx-2">J@Floyd.com</p>
            </div>
            <p>&copy; Made by James Floyd. 2023 JFPen Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;