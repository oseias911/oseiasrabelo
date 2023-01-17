import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/err";

const Routs = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routs;
