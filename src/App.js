// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import Kompetisi from "./components/Kompetisi";
import Admin from './components/Admin';
// import Home from './components/Home';
import ComingSoon from './components/ComingSoon';
import Login from './components/Login';
import Footer from "./components/Footer";
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/kompetisi/itcomp" element={<Kompetisi />} />
          <Route path="/" element={<ComingSoon />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Kompetisi/itcomp/registrasi" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
