// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
// import RegistrationForm from "./components/RegistrationForm";
// import Home from "./components/Home";
import Admin from './components/Admin';
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
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ComingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/regist" element={<RegistrationForm />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
