import { useState } from "react";

const Form = () => {
  const [input, updateInput] = useState({
    name: "",
    amount: 0,
  });

  const handleOnChange = (e) => {
    updateInput({
      ...input,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  

  return (
    <form >
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={input.name}
          onChange={handleOnChange}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          name="amount"
          className="u-full-width"
          placeholder="Ej. 300"
          value={input.amount}
          onChange={handleOnChange}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Form;
