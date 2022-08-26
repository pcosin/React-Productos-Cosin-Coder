import React, { useState } from 'react'
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ItemCount from './itemCount';
import {products} from "../../mock/products.js"
import ItemList from './itemList/ItemList';

function ItemListContainer(props) {
  const [items, setItems] = useState([])

  useEffect(()=> {
    const getProducts  = new Promise((res, rej) =>{
      setTimeout(()=> {
        res(products)
      }, 2000
      )
    });
    getProducts
    .then((data) =>{
      setItems(data) 
    }).catch((error) => {
      console.log("catch:", error )
    }).finally(()=>{
      console.log("Terminó")
    })

  }, [])

  const onAdd = () => {
    console.log("hola")
  }


  return (
    <Container>
    <h2 className='text-center p-4'>{props.name}</h2>
    <ItemList items ={items} />
    <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
    </Container>
  )
}

export default ItemListContainer