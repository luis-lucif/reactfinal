import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FondoEmpty from "../images/empty_cart.png";
import { cartContext } from "./CartContext";
import "./styles/carrito.css";

function Cart() {

  const { carrito, removeItem, totalPrecio, clear} = useContext(cartContext);

  return (
    <Container fluid className="p-2 contenedorTodo">
      {carrito.length ? (
        <Table striped bordered responsive="xs" className='text-center mt-3' variant="dark">
          <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>CANT.</th>
              <th>PRECIO</th>
              <th>BORRAR</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => {
              return (
                <tr key={item.id}>
                  <td> 
                    <img src={item.imgUrl} alt={item.nombre} style={{height:"100px", width:"100px"}}/>
                  </td>
                  <td> {item.cantidad} </td>
                  <td>$ {item.precio} </td>
                  <td>
                    <Button className="btn-danger" onClick={()=> removeItem(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bag-x" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"/>
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    </Button>
                 </td>
                </tr>
              )
            })}    
            <tr>
              <th colSpan={2}>PRECIO TOTAL:</th>
              <th colSpan={2}> $ {totalPrecio()} </th>
            </tr>
            <tr>
              <th colSpan={2}>
                <Button variant="danger" onClick={() => clear() } >Eliminar compra</Button>
              </th>
              <th colSpan={2}>
              <Link className='btn btn-secondary' to={`/checkout`}>Finalizar compra</Link>
              </th>
            </tr> 
          </tbody>
        </Table>
      ) : (
        <Container>
          <Container className="text-center">
            <img src={FondoEmpty} alt="Fondo Empty" className="img-fluid" />
            <h2>NO HAY PRODUCTOS</h2>
            <Link className='btn btn-dark' to={`/`}>Volver al inicio</Link>
          </Container>
        </Container>
      )}
    </Container>
  )
}

export default Cart;