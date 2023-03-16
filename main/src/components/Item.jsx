import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./styles/contenedor.css";

export default function Item({ producto }) {
  return (
    <Container className="m-2 text-center">
      <Card style={{ width: '18rem'}} className="estilosDeCards">
          <Card.Header> {`${producto.categoria} de ${producto.metal}`} </Card.Header>
          <Card.Img src= {producto.imgUrl} style={{height:"280px"}} />
          <Card.Body>
              <Card.Title> {producto.nombre} </Card.Title>
              <Card.Text>$ {producto.precio} </Card.Text>
              <Link to={`/item/` + producto.id}>Ver detalles</Link>
          </Card.Body>
      </Card>
    </Container>
  )
}
