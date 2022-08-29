import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount';


function ItemDetail({product}) {
    const onAdd = () => {
        console.log("hola")
      }
    
  return (
  <Container>
  <div className='row'>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.titulo}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
      </Card.Body>
    </Card>
  </div>
  </Container>
  )
}

export default ItemDetail