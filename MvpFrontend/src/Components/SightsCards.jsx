import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function SightsCards({ sight }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="city-image" variant="top" src={sight.image} />
      <Card.Body>
        <Card.Title>{sight.name}</Card.Title>
        <Card.Text>
          <p>Description: {sight.description}</p>
          <p>Price: {sight.price}</p>
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}
