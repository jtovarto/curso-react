import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import Appointment from "./Components/Appointment";

function App() {
  let initAppointments = JSON.parse(localStorage.getItem("appointments")) ?? [];
  const [appointments, updateAppointments] = useState(initAppointments);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const createAppointment = (appointment) => {
    updateAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (id) => {
    updateAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
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
            {appointments.length > 0 ? (
              <h2>Administrar tus citas</h2>
            ) : (
              <h2>Agrega una cita</h2>
            )}

            {appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
