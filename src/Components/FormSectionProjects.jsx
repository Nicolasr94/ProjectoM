import { useEffect,useState} from "react";

export function FormSectionProjects({
    handleChangeOptions,
    handleChange,
    formValues,
    onErrors
})

{
    
 const [errors, setErrors] = useState({});

 const validate = () => {
     let tempErrors = {};
     if (!formValues.horario_voluntariado) {
         tempErrors.horario_voluntariado = "Elegir una opción";
     }
     if (!formValues.proyecto_interes) {
         tempErrors.proyecto_interes = "Elegir un proyecto es obligatorio";
     }
     
     setErrors(tempErrors);
     return Object.keys(tempErrors).length === 0;
 };



useEffect(() => {
    validate(); 
  }, [formValues.horario_voluntariado,formValues.proyecto_interes]);

useEffect(() => {
     onErrors(errors);
 }, [errors]);


    return (
        <>
            <div className="form-section">
                <label htmlFor="horario_voluntariado">
                    ¿Qué horario tenés disponible para el voluntariado?:{" "}
                {errors.horario_voluntariado && <p className="error-message">{errors.horario_voluntariado}</p>}
                <select
                    key={1}
                    id="horario_voluntariado"
                    value={formValues.horario_voluntariado}
                    name="horario_voluntariado"
                    onChange={(e) => handleChangeOptions (e)}>
                    <option value="">Elegir Días/Horarios</option>

                    <option value="lunes_viernes_manana">
                        Lunes a Viernes - Turno mañana
                    </option>
                    <option value="lunes_viernes_tarde">
                        Lunes a Viernes - Turno tarde
                    </option>
                    <option value="lunes_viernes_completo">
                        Lunes a Viernes - Turno completo
                    </option>

                    <option value="algunos_manana">
                        Algunos días por la mañana
                    </option>
                    <option value="algunos_tarde">
                        Algunos días por la tarde
                    </option>

                    <option value="sabado_manana">Sábado - Turno mañana</option>
                    <option value="sabado_tarde">Sábado - Turno tarde</option>
                    <option value="sabado_completo">
                        Sábado - Turno completo
                    </option>

                    <option value="fin_de_semana">
                        Fines de semana (Sábados y domingos)
                    </option>
                    <option value="indistinto">Indistinto/Flexible</option>
                </select>
                        </label>

                <label htmlFor="proyecto_interes">
                    ¿Hay algún proyecto en especial que te interese?:{" "}
                {errors.proyecto_interes && <p className="error-message">{errors.proyecto_interes}</p>}
                <select
                    key={2}
                    id="proyecto_interes"
                    name="proyecto_interes"
                    value={formValues.proyecto_interes}
                    onChange={(e) => handleChangeOptions (e)}>
                    <option value="">Elegir Proyecto</option>
                    <option value="recorridas_parque_centenario">
                        VOLUNTARIOS PARA RECORRIDAS ZONA PARQUE CENTENARIO
                        (CABA)
                    </option>
                    <option value="recorridas_balvanera">
                        VOLUNTARIOS PARA RECORRIDAS ZONA BALVANERA (CABA)
                    </option>
                    <option value="recorridas_microcentro">
                        VOLUNTARIOS PARA RECORRIDAS ZONA MICROCENTRO (CABA)
                    </option>
                    <option value="voluntarios_si_pueden">
                        VOLUNTARIOS “SI PUEDEN”
                    </option>
                    <option value="profesor_quimica">
                        PROFESOR/A DE QUÍMICA
                    </option>
                    <option value="tutores_distintas_profesiones">
                        TUTORES DE DISTINTAS PROFESIONES
                    </option>
                    <option value="profesor_matematica">
                        PROFESOR/A DE MATEMÁTICA
                    </option>
                    <option value="profesor_algebra_geometria">
                        PROFESOR/A PARTICULAR DE ÁLGEBRA Y GEOMETRÍA ANALÍTICA
                    </option>
                    <option value="voluntarios_residencias_universitarias">
                        VOLUNTARIOS PARA LAS RESIDENCIAS UNIVERSITARIAS
                    </option>
                    <option value="ninguna_preferencia">
                        No tengo preferencia
                    </option>
                </select>
                    </label>

                <label htmlFor="vehiculo">¿Contás con vehículo propio?:</label>
                <div className="checkbox-container">
                    <input
                        id="vehiculo_si"
                        name="vehiculo"
                        type="checkbox"
                        checked={formValues.vehiculo} // Esto maneja el estado si está marcado o no
                        onChange={handleChange} // Esto actualiza el estado
                        required
                    />
                    <label htmlFor="vehiculo_si">Sí</label>

                    <input
                        id="vehiculo_no"
                        name="vehiculo"
                        type="checkbox"
                        checked={!formValues.vehiculo} // Inversión del estado para "No"
                        onChange={handleChange} // Esto actualiza el estado
                        required
                    />
                    <label htmlFor="vehiculo_no">No</label>
                </div>
            </div>
       
        </>
    );
}
