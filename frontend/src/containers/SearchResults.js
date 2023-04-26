// make component to display restaurant info
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchResults() {
  const [result, setResult] = useState({});
  // const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();
  useEffect(() => {
    console.log("inside useEffect");
    axios
      .get(`http://localhost:5001/api/search/${searchTerm}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setResult(data);
        // setLoading(false);
      });
  }, [searchTerm]);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <pre>{JSON.stringify(result, null, 2)}</pre>
    // <div className="restaurant">
    //   <h1>{restaurant.name}</h1>
    //   <p>{restaurant.email}</p>
    //   <p>{restaurant.phoneNumber}</p>
    //   <p>{restaurant.address}</p>
    //   <p>{restaurant.status}</p>
    // </div>
  );
}

export default SearchResults;
