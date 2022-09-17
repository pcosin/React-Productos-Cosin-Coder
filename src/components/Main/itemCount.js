import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount({ initial, stock, onAdd }) {
  const [counter, setCount] = useState(initial);

  const sumar = () => {
    counter < stock && setCount((count) => count + 1);
  };

  const restar = () => {
    counter > 1 && setCount((count) => count - 1);
  };
  return (
    <div className="number d-flex flex-column ">
      <div>
        <span onClick={restar} className="minus">
          -
        </span>
        <span className="count-number">{counter}</span>
        <span onClick={sumar} className="plus">
          +
        </span>
      </div>
      <Button
        className="d-block m-2"
        variant="primary"
        onClick={() => onAdd(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
