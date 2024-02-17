import { BrowserRouter, Route, Routes as AppRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Books from "../pages/Books";
import Download from "../pages/Download";
import About from "../pages/About";
import Contact from "../pages/Contact";




import React from 'react'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <AppRoutes>
              <Route path="/" element={<Home />}/>
              <Route path="/services" element={<Services />} />
              <Route path="/books" element={<Books />} />
              <Route path="/download" element={<Download />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
    
    </AppRoutes>
    </BrowserRouter>
  )
}

export default Routes;






