import { BrowserRouter,Routes, Route} from "react-router-dom";
import React from 'react';
import "./assets/main.scss";
import Home from "./pages/Home";
import Project from './pages/Project';
import Techno from "./pages/Techno";
import technoTools from '../src/data/techoTools.json';
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/techno" element={<Techno technoTools={technoTools} />} />
        <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;