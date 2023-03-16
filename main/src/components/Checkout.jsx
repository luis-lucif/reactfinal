import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import Gracias from "../images/gracias-por-tu-compra.png";
import { cartContext } from "./CartContext";
import "./styles/carrito.css";

function Checkout() {

    const { carrito , totalPrecio, borrarCarrito } = useContext(cartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [provincia, setProvincia] = useState("");
    const [cpostal, setCpostal] = useState("");
    const [tuPedido, setTuPedido] = useState("");

    let validateEmail = (email) => {
      const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailReg.test(email) === false) {
        Swal.fire('Ingrese bien su email!');
        return false;
      }
      return true;
    };

    let validateNombre = (nombre) => {
      const regNombre = /^[a-zA-Z]+[a-zA-Z]+$/ ;
      if (regNombre.test(nombre) === false){
        Swal.fire('Ingrese bien su nombre!');
        return false;
      }
      return true;
    };

    let validateApellido = (apellido) => {
      const regApellido = /^[a-zA-Z]+[a-zA-Z]+$/ ;
      if (regApellido.test(apellido) === false){
        Swal.fire('Ingrese bien su apellido!');
        return false;
      }
      return true;
    };
    

  const comprar = () => {     
    const pedido = {
      comprador: { nombre, apellido, email, direccion, ciudad, provincia, cpostal },
      carrito: carrito,
      total: totalPrecio(),
    };
        
    const db = getFirestore();
    const pedidos = collection(db, "pedidos");

    if (nombre === `` || apellido === `` || email === `` || direccion === `` || ciudad === `` || cpostal === ``) {
      Swal.fire('Ingrese bien sus datos');
      return;
    }
    if (validateEmail(email) === false) {
      return;
    }
    if (validateNombre(nombre) === false){
      return
    }
    if (validateApellido(apellido) === false){
      return
    }

    addDoc(pedidos, pedido).then(({id}) => {
      setTuPedido(id);
    });

    let timerInterval
    Swal.fire({
      title: 'Procesando tus datos...',
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
    borrarCarrito();
  };

  return (
    <Container fluid className="p-3 contenedorTodo">
      {tuPedido ? (
        <Container className="pt-3">
          <Alert variant="success" className='p-2 d-flex flex-column justify-content-between'>
        <Alert.Heading>Hey {nombre.toUpperCase()}, tu datos se han ingresado con exito!!</Alert.Heading>
        <hr />
        <h6>
          Tu orden de pedido:  
          <b>
            {` ${tuPedido} `}
          </b>
        </h6>
        <hr />
        <p className="mb-0">
            <div  className="h6">
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
                  Destino de envio: 
                <b>
                  {` ${direccion.toUpperCase()} , ${ciudad.toUpperCase()} , ${provincia.toUpperCase()}`}
                </b>
            </div>
        </p>
        <hr />
        <h6>Nuestro equipo se comunicara a <u>{email.toUpperCase()}</u> para acordar la forma de pago y envio </h6>
        <hr />
        <div className="text-center">
          <img src={Gracias} style={{height:"40%", width:"40%"}} className="img-fluid" />
        </div>
        </Alert>
        <Container className="text-center p-2">
          <Link to={`/`} >Volver al inicio</Link>
        </Container>
        </Container>
      ) : (         
        <>
        <Form className="p-4">
                <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Nombre :</Form.Label>
                      <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}  />
                    </Form.Group >

                    <Form.Group as={Col}>
                      <Form.Label>Apellido :</Form.Label>
                      <Form.Control type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </Form.Group>                    
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Direccion :</Form.Label>
                    <Form.Control placeholder="Av.Rivadavia 2043" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Ciudad:</Form.Label>
                      <Form.Control value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Provincia :</Form.Label>
                      <Form.Control value={provincia} onChange={(e) => setProvincia(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip" value={cpostal} onChange={(e) => setCpostal(e.target.value)}>
                      <Form.Label>Cp:</Form.Label>
                      <Form.Control />
                    </Form.Group>
                </Row>
        </Form>
        <Table striped bordered responsive="xs" className='text-center tablaBorder' variant="dark">
        <thead>
            <tr>
                <th colSpan={4}>TU PEDIDO</th>
            </tr>
        </thead>
          <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>NOMBRE</th>
              <th>CANT.</th>
              <th>PRECIO</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => {
              return (
                <tr key={item.id}>
                  <td> 
                    <img src={item.imgUrl} alt={item.nombre} style={{height:"100px", width:"100px"}}/>
                  </td>
                  <td> {item.nombre} </td>
                  <td> {item.cantidad} </td>
                  <td>$ {item.precio} </td>
                </tr>
              )
            })}    
            <tr>
              <th colSpan={2}>TOTAL A PAGAR:</th>
              <th colSpan={2}> $ {totalPrecio()} </th>
            </tr>
          </tbody>
        </Table>   
        <Container className="text-center p-3">
            <Link onClick={comprar} className="btn btn-dark">Realizar pedido</Link>
        </Container>
        </>
        )}
    </Container>
  )
}

export default Checkout