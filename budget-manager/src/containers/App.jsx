import { useState } from "react";
import Question from "./Question";

function App() {
  const [budget, updateBudget] = useState(0);
  const [remaining, updateRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Question
            updateBudget={updateBudget}
            updateRemaining={updateRemaining}
          />
          <div className="row">
            <div className="one-half column">1</div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
