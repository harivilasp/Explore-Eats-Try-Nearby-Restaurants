import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from './containers/Login';
import RegisterCustomer from './containers/RegisterCustomer';
import RegisterRestaurant from './containers/RegisterRestaurant';
import Profile from './containers/Profile'
import Restaurant from "./containers/Restaurant";
import AdminLogin from "./containers/AdminLogin";
import Maps from "./containers/Maps";
import SearchResults from "./containers/SearchResults";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/register-customer" element={<RegisterCustomer />} />
        <Route path="/register-restaurant" element={<RegisterRestaurant />} />
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/restaurant" element = {<Restaurant/>}/>
        <Route path="/admin-login" element = {<AdminLogin/>}/>
        <Route path="/maps" element = {<Maps/>}/>
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
