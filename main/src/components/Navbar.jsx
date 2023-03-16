import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../images/pandora.png";
import { cartContext } from "./CartContext";
import CarWidget from "./CarWidget";
import "./styles/navbar.css";

function Navegador() {
  const { carrito } = useContext(cartContext);
  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    setCantidad(carrito.length);
    /*setCantidad(carrito.reduce((acc,item) => acc + item.cantidad,0));*/
  }, [carrito])
  
  return (
    <Navbar expand="lg" variant="dark" style={{backgroundColor: "#0b0b0b", width:"100%"}} >
      <Container fluid>
        <Navbar.Brand>
          <Link to={`/`}><img src={Logo} alt="Logo del site" className="logo" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Link className="nav-link" to={`/`}>Inicio</Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/Anillo`}>Anillos</Link>  
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/Aros`}>Aros</Link>
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/Pulsera`}>Pulseras</Link>
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/Cadena`}>Cadenas</Link>
            </NavDropdown>
            <Link className="nav-item dropdown-item" to={`Cart`} ><CarWidget cantidad={cantidad}/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;