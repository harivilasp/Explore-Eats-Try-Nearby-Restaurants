// make component to display restaurant info
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Restaurant() {
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
    <pre>{JSON.stringify(restaurant, null, 2)}</pre>
    // <div className="restaurant">
    //   <h1>{restaurant.name}</h1>
    //   <p>{restaurant.email}</p>
    //   <p>{restaurant.phoneNumber}</p>
    //   <p>{restaurant.address}</p>
    //   <p>{restaurant.status}</p>
    // </div>
  );
}

export default Restaurant;
