import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";
import "./itemDetail.css";
import { Button } from "react-bootstrap";
import { useCartContex } from "../../../context/CartContext";

function ItemDetail({ product }) {
  const [cont, setCont] = useState(null);
  const { addToCart } = useCartContex();

  const onAdd = (cantidad) => {
    setCont(cantidad);
    addToCart(product, cantidad);
  };

  return (
    <Container>
      <div className="row">
        <Card className="card-single" style={{ width: "35rem" }}>
          <Card.Img variant="top" src={product.imagen} />
          <Card.Body>
            <Card.Title>{product.titulo}</Card.Title>
            <Card.Text>Precio: ${product.precio}</Card.Text>
            <Card.Text>Colores: {product.colores}</Card.Text>
            <Card.Text>Medidas: {product.medidas}</Card.Text>
            {cont ? (
              <Container className="d-flex justify-content-between">
                <Link to="/cart">
                  <Button variant="primary">Al carrito</Button>
                </Link>
                <Link to="/">
                  <Button variant="primary">Continuar comprando</Button>
                </Link>
              </Container>
            ) : (
              <ItemCount stock={5} initial={1} onAdd={onAdd} />
            )}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default ItemDetail;
