import React from 'react';
import '../styles/RestaurantDetails.css';

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <div className="restaurant-image-container">
        <img src="https://via.placeholder.com/150" alt="Restaurant" className="restaurant-image" />
        <h1 className="restaurant-name">Restaurant Name</h1>
      </div>
      <div className="restaurant-details-container">
        <p className="restaurant-address">Address</p>
        <p className="restaurant-open-now">Open Now: Yes</p>
        <p className="restaurant-rating">Rating: 4.5</p>
        <button className="contact-button">Contact this Place</button>
      </div>
    </div>
  );
}

export default Restaurant;
