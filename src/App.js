import "./App.scss";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NoPageFound from "./pages/NoPageFound";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About />}/>
        <Route path='/Contacts' element={<Contacts />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='*' element={<NoPageFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
