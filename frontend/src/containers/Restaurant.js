import React from 'react';
import '../styles/RestaurantDetails.css';

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <div className="restaurant-image-container">
        <img src="https://via.placeholder.com/150" alt="Restaurant" className="restaurant-image" />
        <h1 className="restaurant-name">Restaurant Name</h1>
        <button className="add-to-favorites-button">Add to favorites</button>
        <button className="add-to-favorites-button">Call back</button>
      </div>
      <div className="restaurant-details-container">
        <p className="restaurant-address">Address</p>
        <p className="restaurant-rating">Rating: 4.5 (number of ratings)</p>
      </div>
    </div>
  );
}

export default Restaurant;
