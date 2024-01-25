// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
// import RegistrationForm from "./components/RegistrationForm";
import Kompetisi from "./components/Kompetisi";
// import Admin from './components/Admin';
import Hacker from './components/Hacker';
// import ComingSoon from './components/ComingSoon';
import Login from './components/Login';
import Footer from "./components/Footer";
import NotFound from './components/NotFound';
import ReactGA from 'react-ga';

const App = () => {
  ReactGA.initialize('G-9TTERL4MZN');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Kompetisi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hacker" element={<Hacker />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="/Kompetisi/itcomp/registrasi" element={<RegistrationForm />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
