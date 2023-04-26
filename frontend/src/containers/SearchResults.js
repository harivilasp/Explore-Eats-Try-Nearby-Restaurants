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
        setResult(data);
        // setLoading(false);
      });
  }, [searchTerm]);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="flex">
      <pre>{JSON.stringify(result, null, 2)}</pre>
      {/* display search results
      console.log(result.type);
      {result.map((restaurant) => (
        <Card restaurant={restaurant} />
      ))} */}
    </div>
  );
}

export default SearchResults;
