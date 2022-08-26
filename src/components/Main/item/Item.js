import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({item}) {

    console.log(item)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.imagen} />
    <Card.Body>
      <Card.Title>{item.titulo}</Card.Title>
      <Card.Text>$ {item.precio}
      </Card.Text>
      <Card.Text>{item.descripcion}
      </Card.Text>
      <Button variant="primary">Comprar</Button>
    </Card.Body>
  </Card>
  )
}

export default Item