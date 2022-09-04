import React, { useState, useEffect } from 'react'
import {products} from "../../mock/products.js"
import ItemDetail from './itemDetail/itemDetail'
import {useParams} from "react-router-dom";
import { Container } from 'react-bootstrap';

function ItemDetailContainer(prod) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {detailId} = useParams()

    const oneProduct = products.find((prod)=> prod.id === detailId) 

    useEffect(()=> {
        const getProducts  = new Promise((res, rej) =>{
          setTimeout(()=> {
            res(oneProduct)
          }, 2000
          )
        });
        getProducts
        .then((data) =>{
          setProduct(data) 
        }).catch((error) => {
          console.log("catch:", error )
        }).finally(()=>{
          setLoading(false)
        })
    
      }, [])

  return (
    <> {loading ? ( <div className="loader-container">
    <div className="spinner"></div>
  </div>) :
    <Container>
    <h2 className='text-center'>Detalle del producto</h2>
    <ItemDetail product = {product} />
    </Container>
  }</>
  )
}

export default ItemDetailContainer