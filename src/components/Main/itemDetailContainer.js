import React, { useState, useEffect } from 'react'
import {products} from "../../mock/products.js"
import ItemDetail from './itemDetail/itemDetail'
import {useParams} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { db } from '../../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';

function ItemDetailContainer(prod) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {detailId} = useParams()

    const oneProduct = products.find((prod)=> prod.id === detailId) 

    useEffect(() => {
      const itemCollection = collection(db, 'items');
      const ref = doc(itemCollection, detailId);
      getDoc(ref).then((res) => {
          setProduct({ id: res.id, ...res.data() });
      }).catch((error) => {
              console.log("catch:", error )
            }).finally(()=>{
              setLoading(false)
            })
  }, [detailId]);


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