import React from "react";
const Form = () => {
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
        />

        <label>Nombre dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre del dueño de la mascota"
        />

        <label>Fecha</label>
        <input type="date" name="date" className="u-full-width" />

        <label>Nombre mascota</label>
        <input type="time" name="time" className="u-full-width" />

        <label>Síntomas</label>
        <textarea
          name="symptoms"
          cols="30"
          rows="10"
          className="u-full-width"
        ></textarea>

        <button type="sbmit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Form;
