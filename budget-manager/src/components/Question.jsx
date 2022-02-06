import { useState } from "react";
import Error from "./Error";

const Question = ({ updateBudget, updateRemaining, updateShowQuestion }) => {
  const [amount, updateAmount] = useState(0);
  const [errors, updateErrors] = useState(false);

  const addBudget = (e) => {
    e.preventDefault();

    if (amount < 1 || isNaN(amount)) {
      updateErrors(true);
      return;
    }
    updateErrors(false);
    updateBudget(amount);
    updateRemaining(amount);
    updateShowQuestion(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {errors ? <Error message="El monto introducido es inválido" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => updateAmount(parseInt(e.target.value, 10))}
          value={amount}
        />

        <input
          type="submit"
          className="button-primary- u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

export default Question;