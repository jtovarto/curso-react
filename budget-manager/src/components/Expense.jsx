import PropTypes from "prop-types";

const Expense = ({ expense }) => {
  const { name, amount } = expense;
  return (
    <li className="gastos">
      <p>
        {name}
        <span className="gasto">$ {amount}</span>
      </p>
    </li>
  );
};
Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};
export default Expense;
