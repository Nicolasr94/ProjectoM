import { useState,useEffect } from 'react';

export function FormSectionPersonalInfo({ handleChange, formValues,onErrors}) {

    const [errors, setErrors] = useState({});
    const regexTelefono = /^(\d{0,3})?11\d{5,11}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validate = () => {
        let tempErrors = {};
        if (!formValues.nombre) {
            tempErrors.nombre = "El nombre es requerido";
        }
        if (!formValues.apellido) {
            tempErrors.apellido = "El apellido es requerido";
        }
        if (!formValues.fecha_nacimiento) {
            tempErrors.fecha_nacimiento = "La fecha de nacimiento es requerida";
        }
        if (formValues.telefono && !regexTelefono.test(formValues.telefono)) {
            tempErrors.telefono = "Número de teléfono inválido";
        }
    
        if (formValues.email && !regexEmail.test(formValues.email)) {
            tempErrors.email = "Correo electrónico inválido";
        }
        if (!formValues.ocupacion) {
            tempErrors.ocupacion = "La ocupación es requerida";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    useEffect(() => {
        onErrors(errors);
    }, [errors]);


    const handleChangeAndValidate = (e) => {
        handleChange(e);
        validate();
    };

    return (
        <div className="form-section"> 
            <label htmlFor="nombre">Nombre: </label>
            <input id="nombre" name="nombre" value={formValues.nombre} onChange={(e) => handleChangeAndValidate(e)} type="text" required />
            {errors.nombre && <p className="error-message">{errors.nombre}</p>}
        
            <label htmlFor="apellido">Apellido: </label>
            <input id="apellido" name="apellido" value={formValues.apellido} onChange={(e) => handleChangeAndValidate(e)} type="text" required />
            {errors.apellido && <p className="error-message">{errors.apellido}</p>}

            <label htmlFor="fecha_nacimiento">Fecha de nacimiento: </label>
            <input id="fecha_nacimiento" name="fecha_nacimiento" type="date" value={formValues.fecha_nacimiento} onChange={(e) => handleChangeAndValidate(e)} required />
            {errors.fecha_nacimiento && <p className="error-message">{errors.fecha_nacimiento}</p>}

            <label htmlFor="email">Email: </label>
            <input id="email" name="email" value={formValues.email} onChange={(e) => handleChangeAndValidate(e)} type="text" />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label htmlFor="telefono">Numero de contacto: </label>
            <input id="telefono" name="telefono" type="tel" value={formValues.telefono} onChange={(e) => handleChangeAndValidate(e)} pattern="\d*" required placeholder="Ej: 1123456789" />
            {errors.telefono && <p className="error-message">{errors.telefono}</p>}

            <label htmlFor="ocupacion">Ocupación: </label>
            <input id="ocupacion" name="ocupacion" value={formValues.ocupacion} onChange={(e) => handleChangeAndValidate(e)} type="text" required />
            {errors.ocupacion && <p className="error-message">{errors.ocupacion}</p>}
        </div>
    );
}