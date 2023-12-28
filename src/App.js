// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment and replace with your components */}
          {/* <Route path="/it-comp-2024" element={<ITComp2024 />} /> */}
          {/* <Route path="/it-comp-internal-2024" element={<ITCompInternal2024 />} /> */}
          <Route path="/regist" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
