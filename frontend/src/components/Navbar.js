import React, { useState } from "react";
import ExploreEats from "../assets/ExploreEats_flat.png";
const Navbar = ({ isLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);
    // event.target.get("searchTerm");
    // get the search term and send it to the backend
    console.log(searchTerm);
    // navigate to the search page
    window.location.href = `/search/${searchTerm}`;
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      {/* <a href="#" className="mr-4 text-lg font-bold text-gray-800"> */}
      <img src={ExploreEats} width="200" height="100" />
      {/* </a> */}

      {/* Search Bar */}
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            className="w-6 h-6 text-gray-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M22.8,21.4L18.5,17.1c1.2-1.5,1.9-3.4,1.9-5.5c0-5-4-9-9-9s-9,4-9,9s4,9,9,9c2.1,0,4-0.7,5.5-1.9l4.3,4.3c0.4,0.4,1,0.4,1.4,0C23.2,22.4,23.2,21.8,22.8,21.4z M4,10c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S4,13.3,4,10z" />
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>

      {/* Buttons and Dropdown */}
      <div className="flex items-center space-x-4">
        {/* Your Maps button */}
        <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
          Your Maps
        </button>

        {/* Your Saved Spaces button */}
        <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
          Your Saved Spaces
        </button>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={(e) => setShowDropdown(!showDropdown)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Options
          </button>
          {showDropdown && (
            <div className="absolute z-10 right-0 w-40 py-2 mt-2 bg-white border rounded-md shadow-lg">
              {isLoggedIn ? (
                <>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Home
                  </a>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Site Preferences
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Home
                  </a>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
