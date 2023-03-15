import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/About/Aboutus";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
