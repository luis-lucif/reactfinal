import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Item from "./Item";
import "./styles/contenedor.css";

function ItemList ({ items }) {
    
    return (
        <div className="contenedorCard">        
            {items.length ? (
                <div className="cardDetail">
                {items.map((item) => {             
                    return (
                        <div key={item.id}>
                            <Item producto={item} />
                        </div>
                    )
                })}
                </div>
            ) : (
                <div className="cardDetail" >
                    <div className="contenedorLoad">
                        <Spinner animation="border" variant="secondary" className="load" />
                    </div>
                </div>
            )}    
        </div>
    );
}

export default ItemList;