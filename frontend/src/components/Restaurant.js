// make component to display restaurant info
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RestaurantComponent() {
  const [restaurant, setRestaurant] = useState({});
  // const [loading, setLoading] = useState(true);
  const { place_id } = useParams();
  console.log(place_id);
  useEffect(() => {
    console.log("inside useEffect");
    axios
      .get(`http://localhost:5001/api/restaurant/${place_id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setRestaurant(data);
        // setLoading(false);
      });
  }, [place_id]);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    // <pre>{JSON.stringify(restaurant, null, 2)}</pre>
    <div className="restaurant">
      {/* <p>
        <img src={restaurant.photo_reference}> </img>
      </p> */}
      <h1>{restaurant.name}</h1>
      <p>{restaurant.rating}</p>
      <p>{restaurant.formatted_phone_number}</p>
      <p>{restaurant.website}</p>
      <p>{restaurant.formatted_address}</p>
    </div>
  );
}

export default RestaurantComponent;
