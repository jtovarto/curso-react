import React, { useState } from "react";
import Form from "./Components/Form";
import Appointment from "./Components/Appointment";

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
          <div className="one-half column">
            <h2>Administrar tus citas</h2>
            {appointments.map((appointment) => (
              <Appointment key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
