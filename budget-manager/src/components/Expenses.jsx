import Expense from "./Expense";

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

export default Expenses;