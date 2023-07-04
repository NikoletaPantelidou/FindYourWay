import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function SightsCards({ sight }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="city-image" variant="top" src={sight.image} />
      <Card.Body>
        <Card.Title>{sight.name}</Card.Title>
        <Card.Text>
          <div>Description: {sight.description}</div>
          <div>Price: {sight.price}</div>
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}
