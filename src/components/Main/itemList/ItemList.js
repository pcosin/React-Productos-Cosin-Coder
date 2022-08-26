import React from 'react'
import { Container } from 'react-bootstrap'
import Item from '../item/Item'

function ItemList({items}) {

  return (
    <Container>
    <div className='row justify-content-center gap-3'> 
    {items.map((item)=> {
      return (
        <Item key = {item.id} item = {item} />
      )
  })}
  </div>
    </Container>
  )
}

export default ItemList