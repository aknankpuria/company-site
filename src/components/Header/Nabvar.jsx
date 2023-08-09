import React from 'react';
import Home from "../Home";
import { ReactDOM } from 'react-dom/client';
import { Routes , Route, Link , BrowserRouter, createBrowserRouter } from "react-router-dom";

import About from "./About";
import Partner from "./Partner";
import Contact from "./Contact";

const Nabvar = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/partner" element={<Partner />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/home" element={<Home />} />
       </Routes>
    
    </BrowserRouter>
  )
}

export default Nabvar