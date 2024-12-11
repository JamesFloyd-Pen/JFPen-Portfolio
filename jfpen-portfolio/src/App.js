import React from 'react';
import './App.css';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>Write a brief introduction about yourself here.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
      </section>
      <Button variant="contained" color="primary">
        Hello MUI
      </Button>

    </div>
  );
}

export default App;