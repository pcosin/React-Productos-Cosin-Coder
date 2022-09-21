import React from 'react'
import { useState, useContext } from 'react';
import { useCartContex } from "../../../context/CartContext";
import { Container, Card, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import FormFinal from "../../Form/Form.js"
import "./cart.css"



function Cart() {

  const [idCompra, setIdCompra] = useState('');

  const { cartList, clearCart, removeItem, totalPrice } = useCartContex()

  const total = totalPrice();

  const handleId = (id) => {
      setIdCompra(id);
  };

  if (idCompra) {
      return (
      <Container>
        <h2>Gracias por comprar tu id es: {idCompra}</h2>

        <h2>Su total es de: {total}</h2>

        
      </Container>      
      
      );
  }

  
 
  return (
    <Container>
      <h2 className='text-center'>Carrito</h2>
    {    cartList.length === 0 ? <div className='centrado'> <h2 className='text-center'>No hay nada en el carrito</h2>
        <Link className='text-center' to="/">
        <Button >Volver a comprar</Button>
        </Link></div>
            :
       
cartList.map(item =>

<Container className="card-boostrap d-flex">
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
</Container>

)}
<div className='text-center'>
<div> 
  <Button onClick={clearCart}>Limpiar Carrito</Button>
</div>
<div>
  <p>Precio Total: {total} </p>
</div>

<Button>
     Terminar Compra
</Button>
</div>
<FormFinal  cart={cartList}
            clearCart={clearCart}
            handleId={handleId}
            total={total}
/>
      
    </Container>
  )}

export default Cart