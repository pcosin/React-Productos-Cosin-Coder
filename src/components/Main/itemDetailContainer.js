import React, { useState, useEffect } from 'react'
import {products} from "../../mock/products.js"
import ItemDetail from './itemDetail/itemDetail'
import {useParams} from "react-router-dom"

function ItemDetailContainer(prod) {
    const [product, setProduct] = useState({})
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
          console.log("Terminó")
        })
    
      }, [])

  return (
    <>
    <h2 className='text-center'>Detalle del producto</h2>
    <ItemDetail product = {product} />
    </>
  )
}

export default ItemDetailContainer