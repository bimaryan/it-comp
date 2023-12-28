// src/App.js
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NotFound from './components/NotFound';
import { Switch, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/it-comp-2024" element={<ITComp2024 />} /> */}
            {/* <Route path="/it-comp-internal-2024" element={<ITCompInternal2024 />} /> */}
            <Route path="/regist" element={<RegistrationForm />} />
            <Route element={NotFound} />
          </Routes>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
