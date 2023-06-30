import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default function CitiesCards({ city }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="city-image" variant="top" src={city.image} />
      <Card.Body>
        <Card.Title>{city.name}</Card.Title>
        <Link to={`/sights/${city.name}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
