import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Login from "./containers/Login";
import RegisterCustomer from "./containers/RegisterCustomer";
import RegisterRestaurant from "./containers/RegisterRestaurant";
import Restaurant from "./containers/Restaurant";
import AdminLogin from "./containers/AdminLogin";
import Maps from "./containers/Maps";
import SearchResults from "./containers/SearchResults";
import Favorites from "./containers/Favorites";
import Dashboard from "./containers/Dashboard";
import CustomerProfile from "./containers/CustomerProfile";
import RestaurantProfile from "./containers/RestaurantProfile";
import CustomerSettings from "./containers/CustomerSettings";
import Contact from "./containers/Contact";
import RestaurantSettings from "./containers/RestaurantSettings";
import RoleBasedElement from "./filterer/RoleBasedElement";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainContent>
      <Routes>
        {/* common */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-restaurant" element={<RegisterRestaurant />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route 
          path="/search/:searchTerm" 
          element={
          <RoleBasedElement allowedRoles={["customer"]}>
            <SearchResults />
          </RoleBasedElement>
            } 
          />
        <Route path="/contact" element={<Contact />} />
        {/* customer */}
        <Route path="/register-customer" element={<RegisterCustomer />} />
        <Route 
          path="/maps" 
          element={
            <RoleBasedElement allowedRoles={["customer"]}>
            <Maps />
            </RoleBasedElement>
          } 
          />
        <Route
          path="/favorites"
          element={
            <RoleBasedElement allowedRoles={["customer"]}>
              <Favorites />
            </RoleBasedElement>
          }
        />
        <Route
          path="/customer-profile"
          element={
            <RoleBasedElement allowedRoles={["customer"]}>
              <CustomerProfile />
            </RoleBasedElement>
          }
        />
        <Route
          path="/customer-settings"
          element={
            <RoleBasedElement allowedRoles={["customer"]}>
              <CustomerSettings />
            </RoleBasedElement>
          }
        />
        {/* restaurant */}
        
        <Route
          path="/restaurant-profile"
          element={
            <RoleBasedElement allowedRoles={["restaurant"]}>
              <RestaurantProfile />
            </RoleBasedElement>
          }
        />
        
        <Route
          path="/restaurant-settings"
          element={
            <RoleBasedElement allowedRoles={["restaurant"]}>
              <RestaurantSettings/>
            </RoleBasedElement>
          }
        />
        {/* admin */}
        
        <Route
          path="/dashboard"
          element={
            <RoleBasedElement allowedRoles={["admin"]}>
              <Dashboard />
            </RoleBasedElement>
          }
        />
      </Routes>
      </MainContent>
    </BrowserRouter>
  );
}

export default App;