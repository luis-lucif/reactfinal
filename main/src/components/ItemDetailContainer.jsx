import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Fondo from "../images/fondo-slime1.jpg";
import ItemDetail from "./ItemDetail";

export default  function ItemDetailContainer (){

    const { iditem } = useParams();
    const [producto , setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();

        let itemProd = doc(db, "productos", iditem);

        getDoc(itemProd).then((item) => {
            setProducto({ id: item.id, ...item.data() });
        });
      
    }, [iditem]);
    

  return (
    <Container fluid className="p-4" style={{
        backgroundImage: `url(${Fondo})`, 
        backgroundSize: "cover",
        color: "white",
        height:"100%"}}>

        <ItemDetail producto={producto} />

    </Container>
  )
}