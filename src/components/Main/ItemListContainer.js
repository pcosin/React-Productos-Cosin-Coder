import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import {products} from "../../mock/products.js"
import ItemList from './itemList/ItemList';
import {useParams} from "react-router-dom";

function ItemListContainer(props) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  useEffect(()=> {
      const getProducts  = new Promise((res, rej) =>{
      const prodsFiltrados = products.filter((prod) => prod.categoria === categoriaId)
      setTimeout(()=> {
        res(categoriaId ? prodsFiltrados: products)
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
   
  }, [categoriaId])

 

  return (
    <>
    {loading ? ( <div className="loader-container">
      	  <div className="spinner"></div>
        </div>)
    :
    <Container>
    <h2 className='text-center p-4'>{props.name}</h2>
    <ItemList items ={items} />
    </Container>
}</>)
}

export default ItemListContainer