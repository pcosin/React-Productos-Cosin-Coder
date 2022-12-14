import React from "react";
import { useState } from "react";
import { useCartContex } from "../../../context/CartContext";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormFinal from "../../Form/Form.js";
import "./cart.css";

function Cart() {
  const [idCompra, setIdCompra] = useState("");
  const [totalCompra, setTotalCompra] = useState("");
  const [showForm, setShowForm] = useState(false);

  const { cartList, clearCart, removeItem, totalPrice } = useCartContex();

  const total = totalPrice();

  const handleTotalCompra = (monto) => {
    setTotalCompra(monto);
  };

  const handleId = (id) => {
    setIdCompra(id);
  };

  const goToForm = () => {
    setShowForm(!showForm);
  };

  if (idCompra) {
    return (
      <Container>
        <div className="text-center p-3">
          <h2>Gracias por comprar tu id es: {idCompra}</h2>

          <h2>El total de la compra es de: ${totalCompra}</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="text-center">Carrito</h2>
      {cartList.length === 0 ? (
        <div className="centrado">
          {" "}
          <h2 className="text-center">No hay nada en el carrito</h2>
          <Link className="text-center" to="/">
            <Button>Volver a comprar</Button>
          </Link>
        </div>
      ) : (
        cartList.map((item) => (
          <Container className="card-boostrap d-flex">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body key={item.id}>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Text>
                  Cantida de items del producto: {item.cantidad}
                </Card.Text>
                <Card.Text>Precio por unidad: {item.precio}</Card.Text>
                <Card.Text></Card.Text>
                <button onClick={() => removeItem(item.id)}>Borrar Item</button>
              </Card.Body>
            </Card>
          </Container>
        ))
      )}

      {cartList.length > 0 && (
        <div className="text-center">
          <div>
            <Button onClick={clearCart}>Limpiar Carrito</Button>
          </div>
          <div>
            <p>Precio Total: ${total} </p>
          </div>
          {!showForm ? (
            <Button onClick={() => goToForm()}>Terminar Compra</Button>
          ) : (
            <FormFinal
              cartList={cartList}
              clearCart={clearCart}
              handleId={handleId}
              total={total}
              handleTotalCompra={handleTotalCompra}
            />
          )}
        </div>
      )}
    </Container>
  );
}

export default Cart;
