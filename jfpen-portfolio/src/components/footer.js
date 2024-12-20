import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import LinkedIn from './img/linkedInLogo.png';
import Github from './img/githublogo.png';
import X from './img/x-logo.png';
import Instagram from './img/instagram-logo.png';


function Footer() {
  return (
    <footer className="Footer-Background text-center py-4">
      <Container>
        <Row>
          <Col>
            <div className="social-media-links mb-3 d-flex justify-content-center">
              <a href="https://github.com/JamesFloyd-Pen" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <img src={Github} alt="GitHub" width="30" height="30" />
              </a>
              <a href="https://x.com/JamesFloydIV" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <img src={X} alt="X" width="30" height="30" />
              </a>
              <a href="https://www.linkedin.com/in/james-floyd-2316561a1/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <img src={LinkedIn} alt="LinkedIn" width="30" height="30" />
              </a>
              <a href="https://www.instagram.com/commanderpip/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <img src={Instagram} alt="Instagram" width="30" height="30" />
              </a>
            </div>
            <p className="text-black mx-2">J@Floyd.com</p>
            <p>&copy; Made by James Floyd. 2023 JFPen Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;