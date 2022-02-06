import { useState } from "react";
import Form from "./Form";
import Question from "./Question";

function App() {
  const [budget, updateBudget] = useState(0);
  const [remaining, updateRemaining] = useState(0);
  const [expenses, updateExpenses] = useState([]);
  const [showQuestion, updateShowQuestion] = useState(true);
  
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
                <Form 
                  addExpense={addExpense} 
                />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
