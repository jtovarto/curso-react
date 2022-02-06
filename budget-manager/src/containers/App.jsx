import { useState, useEffect } from "react";
import BudgetControl from "../components/BudgetControl";
import Expenses from "../components/Expenses";
import Form from "../components/Form";
import Question from "../components/Question";

function App() {
  const [budget, updateBudget] = useState(0);
  const [remaining, updateRemaining] = useState(0);
  const [expenses, updateExpenses] = useState([]);
  const [showQuestion, updateShowQuestion] = useState(true);

  useEffect(() => {
    if (expenses.length > 0) {
      const { amount: totalExpenses } = expenses.reduce((a, c) => ({
        amount: a.amount + c.amount,
      }));
      updateRemaining(budget - totalExpenses);
    }
  }, [expenses]);
  const addExpense = (expense) => {
    updateExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              updateBudget={updateBudget}
              updateRemaining={updateRemaining}
              updateShowQuestion={updateShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form addExpense={addExpense} />
              </div>
              <div className="one-half column">
                <BudgetControl budget={budget} remaining={remaining} />
                <Expenses expenses={expenses} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
