import { React } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Button from '@mui/material/Button';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Router basename="/JFPen-Portfolio" >
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
