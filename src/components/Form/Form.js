import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { db } from "../../firebaseConfig";

const FormFinal = ({
  cartList,
  clearCart,
  handleId,
  total,
  handleTotalCompra,
}) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let passwordValidated = validatePassword();

    if (passwordValidated) {
      const order = {
        buyer: { nombre, apellido, mail, phone },
        itmes: cartList,
        total: total,
        date: serverTimestamp(),
      };

      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then((res) => {
        handleId(res.id);
        clearCart();
        handleTotalCompra(order.total);
      });
    }
  };

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

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordSecond = (event) => {
    setPasswordSecond(event.target.value);
  };

  const validatePassword = () => {
    if (password !== passwordSecond) {
      alert("debe ingresar el mismo password");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={nombre}
            onChange={handleChangeNombre}
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={apellido}
            onChange={handleChangeApellido}
            required
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Telefono"
            name="telefono"
            value={phone}
            onChange={handleChangePhone}
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={mail}
            onChange={handleChangeMail}
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            name="email"
            value={password}
            onChange={handleChangePassword}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Re ingrese su password"
            name="passwordSecond"
            value={passwordSecond}
            onChange={handleChangePasswordSecond}
            required
          />
        </div>

        <div>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormFinal;
