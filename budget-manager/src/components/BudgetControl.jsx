const BudgetControl = ({ budget, remaining }) => {
  return (
    <>
      <h2>Presupuesto Actual</h2>
      <div className="alert alert-primary">Presupuesto:$ {budget}</div>
      <div className="alert">Presupuesto:$ {remaining}</div>
    </>
  );
};

export default BudgetControl;
