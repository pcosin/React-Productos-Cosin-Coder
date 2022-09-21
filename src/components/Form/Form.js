import React from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebaseConfig";

const FormFinal = ({ cart, clearCart, handleId, total  }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      buyer: { nombre, apellido, mail, phone },
      itmes: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
        handleId(res.id);
        clearCart();
    });
  }

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangeMail = (event) => {
    setMail(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };



  return (
    <div style={{ marginTop: "20px" }}>
      <Form action="" onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Nombre..."
          name="nombre"
          value={nombre}
          onChange={handleChangeNombre}
        />
        <input
          type="text"
          placeholder="Apellido..."
          name="apellido"
          value={apellido}
          onChange={handleChangeApellido}
        />
          <input
          type="number"
          placeholder="Telefono"
          name="telefono"
          value={phone}
          onChange={handleChangePhone}
        />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={mail} onChange={handleChangeMail}
 />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>

      
    </div>
  );
};

export default FormFinal;
