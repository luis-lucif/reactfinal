import React,{useState, useEffect} from "react";

function ItemCount ({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);

    const sumar = () =>{
        setCount(count + 1);
    }

    const resta = () =>{
        setCount(count -1)
    }

    useEffect(() => {
      setCount(initial);
    }, [initial])
    


    return (
        <div style={{display:"flex" , flexDirection:"row", justifyContent:"space-between", justifyItem:"center"}}>
            <button className="btn btn-outline-success" onClick={sumar} disabled={count >= stock}> + </button>
            <div className="h3" style={{color:"black", width:"40px", height:"20px"}}> {count} </div>
            <button className="btn btn-outline-danger" onClick={resta} disabled={count <= 1} > - </button>
            <div>
                <button className="btn btn-dark" onClick={()=> onAdd(count)} disabled={stock = 0} >Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;
