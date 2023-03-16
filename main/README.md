# Pandora

Este proyecto de un e-commerce se realizo durante dos meses en el curso React.Js en Coderhouse donde esta conectado a firebase/firestore.

## Descripcion

Es un e-commerce de una joyeria.\
Desde la vista de la home se puede ver todos los productos donde se muestran con su respectiva imagen, precio,nombre, categoria y metal.\
Tambien se puede navegar entre sus 4 categorias que son : Anillos , Aros, Pulseras y Cadenas.\
Se puede acceder a cada productos donde muestra los detalles de cada producto.\
Tiene un carrito donde se acumulan los productos para efectuar la compra.\
Tiene un icono `Bag` donde se muestran cuantos productos tiene al clickear ahi te lleva al carrito.\
Tambien cuenta con un Checkout que contiene un formulario y una vista de los productos que quiere comprar el usuario donde tiene que completar todos los campos como: nombre, apellido, email, direccion, etc...
A donde el usuario clickeara un boton donde dice finalizar pedido y se le creara un comprobante del pedido.

### `Firesbase/Firestore`

Firestore tiene colecciones creadas como: productos y pedidos.\
Tambien se uso para deployar el proyecto creado.\
Ver en linea: https://pandora-luxury.web.app/

### `Boostrap react`

Se uso la libreria de `boostrap react` para darle estilos a los componentes como las cards , el formulario y una tabla para visualizar mejor los articulos en el componente `Cart.jsx`.

### `Para el uso de este repositorio`

Primero antes todo descargar e instalar `Node.js`.

Para su uso hay que instalar las siguientes librerias.

1 - `React js`\
2 - `Boostrap React`\
3 - `Boostrap Icon`\
4 - `React Router Dom`\
5 - `Sweet Alert`\
6 - `Firebase`

### `Para ejecutar la app`

**Nota: Para ejecutar esta app de manera local debes hacer `npm start`**

Si generas cambios y estas listo para modificar el proyecto debes hacer:

1 - Tenes que hacer `npm build` ya que tiene una carpeta build donde se almacenara los cambios y sera modificada.\
2 - Y luego hacer `firebase deploy` para que los cambios se suban y se vean en linea.

