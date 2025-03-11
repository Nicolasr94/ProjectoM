import "./Form.css";
import { addCard, getAll, addCardAndRef } from "../../firebaseConnect.js";
import { ListOptions } from "./ListOptions.jsx";
import { useEffect, useState, useCallback } from "react";

export default function Form() {
  const validateForm = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = 'El nombre es requerido.';
    if (!form.age || isNaN(form.age) || parseInt(form.age) <= 0) newErrors.age = 'La edad debe ser un número mayor a 0.';
    if (!form.region) newErrors.region = 'La región es requerida.';
    if (!form.email) newErrors.email = 'El email es requerido.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Email no válido.'; // Validacion de email
    if (!form.phoneNumber) newErrors.phoneNumber = 'El teléfono es requerido.';
    if (!/^[0-9]+$/.test(form.phoneNumber)) newErrors.phoneNumber = 'El teléfono debe contener solo números.'
    if (!/^[0-9]{10,12}$/.test(form.phoneNumber))  newErrors.phoneNumber = 'El teléfono debe contener solo números, minímo 10 hasta 12 dígitos.';
    if (!form.idVolunteer) newErrors.idVolunteer = 'Debes asignar un voluntario.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };


  const handleSubmit = async (form, setForm) => {
  if(validateForm()){
    try {
      const response = await addCardAndRef(form, "people");
      alert('Elemento cargado correctamente!.');
      setForm({
        name: '',
        age: '',
        region: '',
        email: '',
        phoneNumber: '',
        idVolunteer: '',
        note: '',
      });
      setErrors({}); 
    } catch (error) {
      alert('Elemento no cargado, ocurrió un error!.');
      console.error(error);
    }
  }
};
    
  
  const [dataToRender, setDataToRender] = useState(undefined);
  const [loading, setLoading] = useState(true); // Estado para indicar carga
  const [errors, setErrors] = useState({});
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

  const getSelectVolunteer= (element) =>{

    console.log(element);
    setForm({...form,idVolunteer: element})
  }                                                 ;

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors({ // Limpia los errores al cambiar los campos
      ...errors,
      [e.target.name]: '',
    });
  };



  return (
    <div className="wrapperForm">
      <form className="form" >
      <label htmlFor="name">Nombre</label>
        {errors.name && <p className="error">{errors.name}</p>} 
        <input id="name" name="name" value={form.name} onChange={handleChange} type="text" required />

        <label htmlFor="age">Edad</label>
        {errors.age && <p className="error">{errors.age}</p>}
        <input id="age" name="age" value={form.age} onChange={handleChange} type="number" required />

        <label htmlFor="region">Region</label>
        {errors.region && <p className="error">{errors.region}</p>} 
        <input id="region" name="region" value={form.region} onChange={handleChange} type="text" required />

        <label htmlFor="email">E-Mail</label>
        {errors.email && <p className="error">{errors.email}</p>}
        <input id="email" name="email" value={form.email} onChange={handleChange} type="email" required />

        <label htmlFor="phoneNumber">Teléfono/Celular de contacto</label>
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        <input id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} type="string" required />

        <label htmlFor="note">Nota/Información que aporte valor</label>
        <input id="note" name="note" value={form.note} onChange={handleChange} type="text" required />

        <label htmlFor="selectVolunteer">
        {errors.idVolunteer && <p className="error">{errors.idVolunteer}</p>}
          Asignar voluntario
          <ListOptions props={dataToRender} trigger={getSelectVolunteer} id="selectVolunteer" />
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
