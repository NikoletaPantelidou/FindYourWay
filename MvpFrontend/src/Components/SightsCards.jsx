import Card from "react-bootstrap/Card";
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
      </Card.Body>
    </Card>
  );
}
