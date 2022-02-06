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

export default Expense;
