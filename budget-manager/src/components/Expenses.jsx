import Expense from "./Expense";
import PropTypes from "prop-types";

const Expenses = ({ expenses }) => {
  return (
    <div className="gastos-realizados">
      <h2>Lista de Gastos</h2>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};
export default Expenses;
