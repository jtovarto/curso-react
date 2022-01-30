import React, { useState } from "react";
const Form = () => {
  const [appointment, updateAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleOnChange = (e) => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleOnChange}
          value={appointment.pet}
        />

        <label>Nombre dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre del dueño de la mascota"
          onChange={handleOnChange}
          value={appointment.owner}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleOnChange}
          value={appointment.date}
        />

        <label>Nombre mascota</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleOnChange}
          value={appointment.time }
        />

        <label>Síntomas</label>
        <textarea
          name="symptoms"
          cols="30"
          rows="10"
          className="u-full-width"
          onChange={handleOnChange}
        >{appointment.pet}</textarea>

        <button type="sbmit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Form;
