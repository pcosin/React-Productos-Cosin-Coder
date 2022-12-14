import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import "./item.css"

function Item({item}) {
  return (
    <Card style={{ width: '20rem' }}>
    <Card.Img className='img-item' variant="top" src={item.imagen} />
    <Card.Body>
      <Card.Title>{item.titulo}</Card.Title>
      <Card.Text>El precio es de $ {item.precio}
      </Card.Text>
      <Card.Text>{item.descripcion}
      </Card.Text>
      <Link to={`/detail/${item.id}`}>
      <Button variant="primary">Detalle</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default Item