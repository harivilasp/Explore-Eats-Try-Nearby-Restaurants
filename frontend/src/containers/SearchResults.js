// make component to display restaurant info
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

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
        // console.log("testing print restult" + data[0].place_id);
        setResult(data);
        // setLoading(false);
      });
  }, [searchTerm]);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="flex">
      {/* {console.log("testing print restult" + result[0].place_id)} */}
      <pre>{JSON.stringify(result[0], null, 2)}</pre>
      {/* display search results */}
      {/* console.log(result.type); */}
      {/* {result.map((restaurant) => (
        <Card restaurant={restaurant} />
      ))} */}
      {/* <Card restaurant={result[0]} /> */}
    </div>
  );
}

export default SearchResults;
