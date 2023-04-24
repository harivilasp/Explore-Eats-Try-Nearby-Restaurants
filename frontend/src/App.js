import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from './containers/Login';
import RegisterCustomer from './containers/RegisterCustomer';
import RegisterRestaurant from './containers/RegisterRestaurant';
import Restaurant from "./containers/Restaurant";
import AdminLogin from "./containers/AdminLogin";
import Maps from "./containers/Maps";
import SearchResults from "./containers/SearchResults";
import Favorites from "./containers/Favorites";
import Dashboard from "./containers/Dashboard";
import CustomerProfile from "./containers/CustomerProfile";
import RestaurantProfile from "./containers/RestaurantProfile"
import CustomerSettings from "./containers/CustomerSettings";
import RestaurantSettings from "./containers/RestaurantSettings"
import Contact from "./containers/Contact"
import RestaurantInfo from "./containers/RestaurantInfo";
import RestaurantFollowers from "./containers/RestaurantFollowers";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* common */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
        <Route path="/contact" element = {<Contact/>}/>
        {/* customer */}
        <Route path="/register-customer" element={<RegisterCustomer />} />
        <Route path="/maps" element = {<Maps/>}/>
        <Route path="/favorites" element = {<Favorites/>}/>
        <Route path="/customer-profile" element = {<CustomerProfile/>}/>
        <Route path="/customer-settings" element = {<CustomerSettings/>}/>
        {/* restaurant */}
        <Route path="/register-restaurant" element={<RegisterRestaurant />} />
        <Route path="/restaurant" element = {<Restaurant/>}/>
        <Route path="/restaurant-profile" element = {<RestaurantProfile/>}/>
        <Route path="/restaurant-settings" element = {<RestaurantSettings/>}/>
        <Route path="/restaurant-info" element = {<RestaurantInfo/>}/>
        <Route path="/restaurant-followers" element = {<RestaurantFollowers/>}/>
        {/* admin */}
        <Route path="/admin-login" element = {<AdminLogin/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
