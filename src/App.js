// src/App.js
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/it-comp-2024" element={<ITComp2024 />} /> */}
          {/* <Route path="/it-comp-internal-2024" element={<ITCompInternal2024 />} /> */}
          <Route path="/regist" element={<RegistrationForm />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
