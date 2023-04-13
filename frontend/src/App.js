import "./App.css";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element = {<Profile/>}/>
      </Routes>
     
      <Footer />

    </BrowserRouter>
  );
}

export default App;
