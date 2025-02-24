import "./Form.css";
import { addCard } from "../../firebaseConnect.js";
import { ListOptions } from "../Components/ListOptions.jsx";
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

    const [selectedOption, setSelectedOption] = useState("");

    const handleChangeOptions = (event) => {
        setSelectedOption(event.target.value);
    };

    return (

        //
            // Nombre y Apellido (Obligatorio)
            // Fecha de nacimiento (Obligatorio)
            // Correo (Obligatorio)
            // Teléfono de contacto (Obligatorio)
            // ¿Dónde vivís? (Obligatorio)
            // ¿Ciudad en la que vivís? (Obligatorio)
            // ¿De qué barrio sos?
            // Ocupación (Obligatorio)
            // ¿Qué horario tenés disponible para el voluntariado? (Obligatorio)
            // ¿Hay algún proyecto en especial que te interese?
            // ¿Contás con vehículo propio?
        //
        <div className="container">
            <form className="form-container">
                <h2>Informacion personal</h2>
                <div className="form-section"> 
                    <label htmlFor="name">Nombre: </label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                
                    <label htmlFor="name">Apellido: </label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        required
                    />

                    <label htmlFor="fecha_nacimiento">Fecha de nacimiento: </label>
                    <input
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        type="date"
                        value={form.fecha_nacimiento}
                        onChange={handleChange}
                        required
                    />


                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="text"
                    />

                    <label htmlFor="telefono">Numero de contacto: </label>
                    <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={form.telefono}
                        onChange={handleChange}
                        pattern="\d*" // Solo permite números
                        required
                        placeholder="Ej: 1123456789"
                    />

                    <label htmlFor="name">Ocupación: </label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                </div>

                <h2>Direccion</h2>
                <div className="form-section">
                    <label htmlFor="combo">Donde vivis?:</label>
                    <select id="combo" value={selectedOption} onChange={handleChangeOptions}>
                        <option value="opcion1">Buenos Aires</option>
                        <option value="opcion2">Cordoba</option>
                        <option value="opcion3">Entre Rios</option>
                    </select>

                    <label htmlFor="combo">¿Ciudad en la que vivís?:</label>
                    <select id="combo" value={selectedOption} onChange={handleChangeOptions}>
                        <option value="opcion1">Tigre</option>
                        <option value="opcion2">Ramos Mejia</option>
                        <option value="opcion3">Caballito</option>
                    </select>

                    <label htmlFor="name">De que barrio sos?: </label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                </div>

                <h2>Voluntariado</h2>
                <div className="form-section">
                    <label htmlFor="name">¿Qué horario tenés disponible para el voluntariado?: </label>
                    <select id="combo" value={selectedOption} onChange={handleChangeOptions}>
                        <option value="lunes_viernes_manana">Lunes a Viernes - Turno mañana</option>
                        <option value="lunes_viernes_tarde">Lunes a Viernes - Turno tarde</option>
                        <option value="lunes_viernes_completo">Lunes a Viernes - Turno completo</option>

                        <option value="algunos_manana">Algunos días por la mañana</option>
                        <option value="algunos_tarde">Algunos días por la tarde</option>

                        <option value="sabado_manana">Sábado - Turno mañana</option>
                        <option value="sabado_tarde">Sábado - Turno tarde</option>
                        <option value="sabado_completo">Sábado - Turno completo</option>

                        <option value="fin_de_semana">Fines de semana (Sábados y domingos)</option>
                        <option value="indistinto">Indistinto/Flexible</option>
                    </select>

                        {/* // 
                        // Separar las listas por titulos 
                        // -Profesor- <- Titulo
                        // Quimica <- opciones
                        // Algebra <- opciones
                        // */}

                    <label htmlFor="name">¿Hay algún proyecto en especial que te interese?: </label> 
                    <select id="combo" value={selectedOption} onChange={handleChangeOptions}>
                        <option value="recorridas_parque_centenario">VOLUNTARIOS PARA RECORRIDAS ZONA PARQUE CENTENARIO (CABA)</option>
                        <option value="recorridas_balvanera">VOLUNTARIOS PARA RECORRIDAS ZONA BALVANERA (CABA)</option>
                        <option value="recorridas_microcentro">VOLUNTARIOS PARA RECORRIDAS ZONA MICROCENTRO (CABA)</option>
                        <option value="voluntarios_si_pueden">VOLUNTARIOS “SI PUEDEN”</option>
                        <option value="profesor_quimica">PROFESOR/A DE QUÍMICA</option>
                        <option value="tutores_distintas_profesiones">TUTORES DE DISTINTAS PROFESIONES</option>
                        <option value="profesor_matematica">PROFESOR/A DE MATEMÁTICA</option>
                        <option value="profesor_algebra_geometria">PROFESOR/A PARTICULAR DE ÁLGEBRA Y GEOMETRÍA ANALÍTICA</option>
                        <option value="voluntarios_residencias_universitarias">VOLUNTARIOS PARA LAS RESIDENCIAS UNIVERSITARIAS</option>
                        <option value="ninguna_preferencia">No tengo preferencia</option>
                    </select>

                    <label htmlFor="vehiculo">¿Contás con vehículo propio?: </label>
                    <div>
                        <input
                            id="vehiculo_si"
                            name="vehiculo"
                            type="checkbox"
                            checked={form.vehiculo} // Esto maneja el estado si está marcado o no
                            onChange={handleChange} // Esto actualiza el estado
                            required
                        />
                        <label htmlFor="vehiculo_si">Sí</label>

                        <input
                            id="vehiculo_no"
                            name="vehiculo"
                            type="checkbox"
                            checked={!form.vehiculo} // Inversión del estado para "No"
                            onChange={handleChange} // Esto actualiza el estado
                            required
                        />
                        <label htmlFor="vehiculo_no">No</label>
                    </div>
                </div>

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
