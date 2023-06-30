import React from "react";
import SightsCards from "./SightsCards";

const CityDetails = ({ match }) => {
  // Access the city id from the URL params
  const { id } = match.params;

  return (
    <div>
      <p>City ID: {id}</p>
      <SightsCards></SightsCards>
    </div>
  );
};

export default CityDetails;
