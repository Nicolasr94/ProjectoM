import "./Form.css";
import { addCard } from "../../firebaseConnect.js";
import { useState } from "react";

const handleSubmit = async (form,setForm) => {
    setForm({
        name: "",
        age:0,
        region:"",
        date:"",
        phoneNumber:"",
        email:""
    })
    try {
   const response = await addCard(form,"volunteers");
    alert("Elemento cargado correctamente!.");
        console.log(response);
    } catch (error) {
        alert("Elemento no cargado,ocurrió un error!.");
        console.error(error);
    }
};

export default function FormVolunteer() {
    const [form, setForm] = useState({
        name: "",
        age:0,
        region:"",
        date:"",
        phoneNumber:"",
        email:""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="wrapperForm">
            <form className="form">
                <label htmlFor="name">Nombre de persona</label>
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

                <label htmlFor="phoneNumber">Numero de celular</label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    type="text"
                />

            <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="text"
                />

                <button
                    className="btnSubmit"
                    onClick={() => handleSubmit(form,setForm)}
                    type="button"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
