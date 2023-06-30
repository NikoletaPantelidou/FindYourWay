import axios from "axios";
import React, { useEffect, useState } from "react";
import CitiesCards from "../Components/CitiesCards";

export default function HomePage() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cities")
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
      });
  }, []);

  return (
    <div className="content">
      <div className="cities">
        {cities.map((city, index) => (
          <CitiesCards key={index} city={city} />
        ))}
      </div>
    </div>
  );
}
