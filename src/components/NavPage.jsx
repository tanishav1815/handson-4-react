import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from '../pages/Contact'
import Students from '../pages/Students'

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;