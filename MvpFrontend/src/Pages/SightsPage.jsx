import axios from "axios";
import React, { useEffect, useState } from "react";
import SightsCards from "../Components/SightsCards";
import { useParams } from "react-router-dom";

export default function SightsPage() {
  const [sights, setSights] = useState([]);
  const { city } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/sights/${city}`)
      .then((response) => {
        setSights(response.data);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
      });
  });

  return (
    <div className="content">
      <div className="sights">
        {sights.map((sight, index) => (
          <SightsCards key={index} sight={sight} />
        ))}
      </div>
    </div>
  );
}
