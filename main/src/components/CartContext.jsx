import React, { createContext, useState, useEffect } from 'react';
import Swal from "sweetalert2";

export const cartContext = createContext();

export default function CartProvider ({ children }) {

    const [carrito , setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || []);
    
    function isInCart (itemId) {
      const hay = carrito.findIndex((item) => item.id === itemId)
      return hay;
    }
    
    function addItem(item, cantidad){
      const pos = isInCart(item.id);
      if (pos === -1){
        setCarrito([...carrito, {...item, cantidad}])
      }else {
        const carritoDuplicado = [...carrito];
        carritoDuplicado[pos] = {...carrito[pos], cantidad: carrito[pos].cantidad + cantidad}
        setCarrito(carritoDuplicado);
      }
    }
    
    function removeItem (itemId) {
      Swal.fire({
        position: 'top-end',
        width: "20rem",
        icon: 'success',
        title: 'Se elimino el producto',
        showConfirmButton: false,
        timer: 1500
      })      
      setCarrito(carrito.filter((item) => item.id !== itemId))
    }
    
    function clear () {
      Swal.fire({
        title: '¿Quieres borrar la compra?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "No",
        confirmButtonText: 'Si, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Su compra ha sido borrada.',
            'success'
            )
            setCarrito([]);
        }
      })
    };

    function borrarCarrito (){
      setCarrito([]);
    }

    const totalPrecio = () => carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0 ).toFixed(3);

    

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito]);
    

    return (
    <cartContext.Provider value={{carrito, addItem, removeItem, clear, totalPrecio, borrarCarrito}}>
        {children}
    </cartContext.Provider>
  );
}
