import "./Form.css";
import { addCard, getAll, addCardAndRef } from "../../firebaseConnect.js";
import { ListOptions } from "./ListOptions.jsx";
import { useEffect, useState, useCallback } from "react";

const handleSubmit = async (form, setForm) => {
  setForm({
    name: "",
    age: 0,
    region: "",
    email: "",
    phoneNumber: "",
    idVolunteer: "",
    note: "",
  });
  try {
    const response = await addCardAndRef(form, "people");
    alert("Elemento cargado correctamente!.");
    console.log(response);
  } catch (error) {
    alert("Elemento no cargado,ocurrió un error!.");
    console.error(error);
  }
};

export default function Form() {
  const [dataToRender, setDataToRender] = useState(undefined);
  const [loading, setLoading] = useState(true); // Estado para indicar carga
  const [form, setForm] = useState({
    name: "",
    age: 0,
    region: "",
    email: "",
    phoneNumber: "",
    idVolunteer: "",
    note: "",
  });

  const getData = useCallback(
    async function getData() {
      setLoading(true);
      try {
        const data = await getAll("volunteers");
        setDataToRender(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [getAll]
  );

  const getSelectVolunteer= (element) => setForm({...form, idVolunteer:element}, console.log(element))

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapperForm">
      <form className="form">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          required
        />

        <label htmlFor="age">Edad</label>
        <input
          id="age"
          name="age"
          value={form.age}
          onChange={handleChange}
          type="number"
          required
        />

        <label htmlFor="region">Region</label>
        <input
          id="region"
          name="region"
          value={form.region}
          onChange={handleChange}
          type="text"
          required
        />

        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          type="text"
        />

        <label htmlFor="phoneNumber">Teléfono/Celular de contacto</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          type="string"
        />

        <label htmlFor="note">Nota/Información que aporte valor</label>
        <input
          id="note"
          name="note"
          value={form.note}
          onChange={handleChange}
          type="text"
        />

        <label htmlFor="selectVolunteer">
          Asignar voluntario
          <ListOptions props={dataToRender} trigger={getSelectVolunteer} id="selectVolunteer"></ListOptions>
        </label>
        <button
          className="btnSubmit"
          onClick={() => handleSubmit(form, setForm)}
          type="button"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
