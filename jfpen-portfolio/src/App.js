import { React, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Button from '@mui/material/Button';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';


function App() {
  useEffect(() => {
    const updatePageHeight = () => {
      document.documentElement.style.setProperty('--page-height', `${document.body.scrollHeight}px`);
    };
    updatePageHeight();
    window.addEventListener('resize', updatePageHeight);
    return () => window.removeEventListener('resize', updatePageHeight);
  }, []);




  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


/*
            <div className="snowflakes" aria-hidden="true">
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
            </div>

*/