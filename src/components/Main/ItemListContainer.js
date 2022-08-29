import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
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

 

  return (
    <Container>
    <h2 className='text-center p-4'>{props.name}</h2>
    <ItemList items ={items} />
    </Container>
  )
}

export default ItemListContainer