import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import ItemList from './itemList/ItemList';
import {useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore"
import { db } from '../../firebaseConfig.js';

function ItemListContainer(props) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  useEffect(() => {
    const itemCollection = collection(db, 'items');
    getDocs(itemCollection)
        .then((response) => {
            const products = response.docs.map((prod) => {  
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
}, [categoriaId]);


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