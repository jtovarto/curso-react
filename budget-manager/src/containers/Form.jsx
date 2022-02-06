import { useState } from "react";
import shortid from "shortid";
import Error from "../components/Error";

const Form = ({ addExpense }) => {
  const [errors, updateErrors] = useState(false);
  const [input, updateInput] = useState({
    name: "",
    amount: 0,
  });

  const handleOnChange = (e) => {
    updateInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    const name = input.name;
    const amount = parseInt(input.amount);

    if (isValid(name, amount)) return;

    updateErrors(false);

    addExpense({
      id: shortid.generate(),
      name,
      amount,
    });

    updateInput({ name: "", amount: 0 });
  };

  const isValid = (name, amount) => {
    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      updateErrors(true);
      return true;
    }
    return false;
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <h2>Agregar Gastos</h2>
      {errors ? <Error message="Algunos de los valos son incorrectos" /> : null}
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
