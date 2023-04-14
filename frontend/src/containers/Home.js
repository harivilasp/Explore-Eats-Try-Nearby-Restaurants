import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

const postData = async (data) => {
  try {
    const response = await axios.post("http://localhost:5001/api/search", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await postData({ lat: 40.7128, lng: -74.006 });
      // console.log("data -- got from backend", data);
      setRestaurants(data);
    }
    fetchData();
  }, []);

  console.log("restaurants", restaurants);

  return (
    <div className="flex">
      {restaurants &&
        restaurants.map((restaurant) => (
          <Card key={restaurant.place_id} restaurant={restaurant} />
        ))}

      {/* <pre>
        <code>{JSON.stringify(restaurants, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default Home;

{
  /* <Card key={restaurant.place_id} restaurant={restaurant} /> */
}
