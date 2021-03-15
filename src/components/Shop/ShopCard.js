import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

const ShopCard = ({cardTitle, cardText, rating, price, desc, src}) => {
	return (
		<Card style={{ width: '16rem' }}>
		  <Card.Img variant="top" src={src} />
		  <Badge className="rating" variant="warning">
		     <i class="fas fa-star"></i> {rating}
		    </Badge>
		  <Card.Body>
		    <Card.Title>{cardTitle}</Card.Title>
		    <Card.Text>
		     {cardText}
		    </Card.Text>
		    <Badge className="" pill variant="success">
		      {price}
		    </Badge>{" "}
		    {desc}
		  </Card.Body>
		</Card>
	);
};

export default ShopCard;
