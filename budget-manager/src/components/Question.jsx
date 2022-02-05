import { useState } from "react";

const Question = () => {
  const [amount, updateAmount] = useState(0);
  const [errors, updateErrors] = useState(false);

  const addBudget = (e) => {
    e.preventDefault();

    if (amount < 1 || isNaN(amount)) {
      updateErrors(true);
      return;
    }
    updateErrors(false);
    
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
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
