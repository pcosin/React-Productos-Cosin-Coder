import React from 'react'
import { useCartContex } from "../../../context/CartContext";
import { Container, Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';




function Cart() {

  const { cartList, clearCart, removeItem, totalPrice } = useCartContex()

  console.log(cartList)
  
  return (
    <div>
    {    cartList.length === 0 ? <div> <h2>No hay nada en el carrito</h2>
        <Link to="/">
        <button>Volver a comprar</button>
        </Link></div>
            :

        
cartList.map(item =>

<Container className="card-boostrap">

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={item.imagen} />
<Card.Body key={item.id} >
<Card.Title>{item.titulo}</Card.Title>
<Card.Text>
    Cantida de items del producto: {item.cantidad}

</Card.Text>
<Card.Text>
    Precio por unidad: {item.precio}

</Card.Text>

<Card.Text>

</Card.Text>
<button onClick={() => removeItem(item.id)}>Borrar Item</button> 
</Card.Body>

</Card>

<div> 
  <button onClick={clearCart}>Limpiar Carrito</button> </div>
<div>

  <p>Precio Total: {totalPrice()} </p>
</div>

<button>
     Terminar Compra
     </button>


</Container>)}
      
      

    </div>
  )
}

export default Cart