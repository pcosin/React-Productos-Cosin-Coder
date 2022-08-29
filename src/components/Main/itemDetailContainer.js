import React, { useState, useEffect } from 'react'
import {products} from "../../mock/products.js"
import ItemDetail from './itemDetail/itemDetail'

function ItemDetailContainer(item) {
    const [product, setProduct] = useState({})

    const oneProduct = products.find((prod)=> prod.id === "1") 

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