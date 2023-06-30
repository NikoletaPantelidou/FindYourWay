import axios from "axios";
import React, { useEffect, useState } from "react";
import SightsCards from "../Components/SightsCards";

export default function SightsPage() {
  const [sights, setSights] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/sights")
      .then((response) => {
        setSights(response.data);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
      });
  }, []);

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
