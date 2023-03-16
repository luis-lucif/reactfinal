import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Fondo from "../images/fondo-slime1.jpg";
import ItemList from "./ItemList";

function ItemListContainer (){

    const { idcategoria } = useParams();
    const [prod, setProd] = useState([]);

   useEffect(() => {
    const db = getFirestore();
    let productos;

    idcategoria 
    ? productos = query(collection(db, "productos"), where("categoria", "==", idcategoria))
    : productos = collection(db , "productos");

    getDocs(productos).then((res) => {
        const arrayDeProductos = res.docs.map(producto => {
        return {
            id: producto.id , ...producto.data()
        }
    })
    setProd(arrayDeProductos);
})
    
}, [idcategoria]) 


    return (
        <Container fluid className="p-2" style={{
            backgroundImage: `url(${Fondo})`, 
            backgroundSize: "cover",
            color: "white"}}>


            <div>
                <ItemList items={prod} idcategoria={idcategoria} />  
            </div>
        </Container>
    );
}

export default ItemListContainer;