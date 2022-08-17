import React from 'react'
import Container from 'react-bootstrap/Container';


function ItemListContainer(props) {
  return (
    <Container>
    <h2>{props.name}</h2>
    </Container>
  )
}

export default ItemListContainer