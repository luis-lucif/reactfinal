import React, { useContext, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { cartContext } from "./CartContext";
import ItemCount from "./ItemCount.jsx";
import "./styles/contenedor.css";
import Swal from "sweetalert2";

export default  function ItemDetail({ producto }) {
  const [bolsa, setBolsa] = useState(false);

  const { addItem } = useContext(cartContext);

  const onAdd  = (cantidad) => {
    Swal.fire({
      position: 'top',
      width: "25rem",
      icon: 'success',
      title: `Se agrego ${producto.nombre} a la compra`,
      showConfirmButton: false,
      timerProgressBar: true ,
      timer: 1500
    })
    addItem(producto, cantidad)
    setBolsa(true)
  }

  let descripcionItem = [
    {label: "Marca :", itemDescripcion: producto?.descripcion?.[0]},
    {label: "Material :", itemDescripcion: producto?.descripcion?.[1]},
    {label: "Pureza :", itemDescripcion: producto?.descripcion?.[2]},
    {label: "Modelo :", itemDescripcion: producto?.descripcion?.[3]},
    {label: "Piedras :", itemDescripcion: producto?.descripcion?.[4]},
    {label: "Edad :", itemDescripcion: producto?.descripcion?.[5]},
  ]

  return (
    <Container className="text-center cardDetail">
      {producto.id ? (
        <Card style={{ width:'50rem', color:"black"}} className="bg-light estilosDeCards">
          <Card.Header as="h4"> {producto.nombre} </Card.Header>
          <Row>
            <Col sm={6}>
              <Row>
                <Card.Img variant="top" src={producto.imgUrl} style={{width:"100%", height:"24rem"}}/>
              </Row>
              <Row className="mt-3">
                <Card.Text className='h4'>$ {producto.precio} </Card.Text>
                <Card.Text style={{color:"green"}} className="lead">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="bi bi-truck" 
                  viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 
                    1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 
                    1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 
                    0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 
                    0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 
                    0 0-2z"/>
                  </svg>
                    Envio gratis a todo el pais
                </Card.Text>
              </Row>
            </Col>
            <Col sm={6}>
              <Card.Body>
                <Card.Body>
                  Disponible: ({producto.stock} unidades)
                </Card.Body>
                <Card.Body>
                  {bolsa 
                  ? <div className="contenedorDireccion">
                    <Link className="btn btn-dark p-1" to="/Cart" >Terminar compra</Link>
                    <Link className="btn btn-info text-white p-1" to="/">Seguir comprando</Link>
                  </div>
                  : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} /> }
                </Card.Body>
                <Card.Title className="mt-3">
                  <u className="h5">Caracteristicas:</u> 
                </Card.Title>
                <Card.Body className="mt-3">
                  <Table striped bordered responsive="md">
                    <tbody>
                      {descripcionItem.map((item) => (
                        <tr>
                          <td> {item.label} </td>
                          <td> {item.itemDescripcion} </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>             
              </Card.Body>
            </Col>
          </Row> 
        </Card>
      ) : (
        <div className="contenedorLoad">
            <Spinner animation="border" variant="secondary" className="load" />
        </div>
      )}
    </Container>
  )
}

