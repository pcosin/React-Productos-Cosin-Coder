import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import {products} from "../../mock/products.js"
import ItemList from './itemList/ItemList';

function ItemListContainer(props) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

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
      setLoading(false)
    })

  }, [])

 

  return (
    <>
    {loading ? <h1 className='text-center p-4'>Cargando...</h1>
    :
    <Container>
    <h2 className='text-center p-4'>{props.name}</h2>
    <ItemList items ={items} />
    </Container>
}</>)
}

export default ItemListContainer