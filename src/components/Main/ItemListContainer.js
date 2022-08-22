import React from 'react'
import Container from 'react-bootstrap/Container';
import ItemCount from './itemCount';


function ItemListContainer(props) {

  const onAdd = () => {
    console.log("hola")
  }
  return (
    <Container>
    <h2>{props.name}</h2>
    <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
    </Container>
  )
}

export default ItemListContainer