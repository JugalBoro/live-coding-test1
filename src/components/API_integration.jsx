import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/api-integration.css";

function API_integration() {
  //using useState
  //when we fetch data from API , using setStarships we update data in starships
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    // Fetch data from SWAPI API using Axios
    axios
      .get("https://swapi.dev/api/starships/")
      .then((response) => {
        // Set the data.results to the starships state
        setStarships(response.data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    //we display the following details :  name, Model of Ship, Passenger
    <>
      <h1>Star Warships Cartoon data</h1>
      <div className="starship-list">
        {starships.map((starship) => (
          <div key={starship.name} className="starship-card">
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Passengers: {starship.passengers}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default API_integration;
