import React, { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [appointments, updateAppointments] = useState([]);

  const createAppointment = (appointment) => {
    updateAppointments([...appointments, appointment]);
  };
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </>
  );
}

export default App;
