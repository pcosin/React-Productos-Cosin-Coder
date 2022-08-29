import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount';
import "./itemDetail.css";


function ItemDetail({product}) {
    const onAdd = () => {
        console.log("hola")
      }
    
  return (
  <Container>
  <div className='row'>
  <Card className='card-single' style={{ width: '35rem' }}>
  <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.titulo}</Card.Title>
        <Card.Text>
          Precio: ${product.precio}
        </Card.Text>
        <Card.Text>
          Colores: {product.colores}
        </Card.Text>
        <Card.Text>
          Medidas: {product.medidas}
        </Card.Text>
        <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
      </Card.Body>
    </Card>
  </div>
  </Container>
  )
}

export default ItemDetail