import "./Form.css";
import { addCard } from "../../firebaseConnect.js";
import {FormSectionPersonalInfo} from "../Components/FormSectionPersonalInfo.jsx"
import {FormSectionAddres} from "../Components/FormSectionAddres.jsx"
import {FormSectionProjects} from "../Components/FormSectionProjects.jsx"
import { useState,useEffect } from "react";
import {Provincias} from '../Data/Provincias.js';
import {ToastContainer, toast} from "react-toastify"

const URL_FETCH_CIUDAD = "https://apis.datos.gob.ar/georef/api/localidades?provincia=";

function validarFormulario(formData) {
    for (const key in formData) {
        console.log(formData[key])
      if (formData[key] === '') {
        return false;
      }
    }
    return true;
  }

  
  export default function FormVolunteer() {
   
    
    const [allErrors, setAllErrors] = useState({});
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        fecha_nacimiento: "",
        email: "",
        telefono: "",
        ocupacion: "",
        provincia: "",
        ciudad: "",
        barrio: "",
        horario_voluntariado: "", 
        proyecto_interes: "",
        vehiculo: false 
    });

    const [ciudades,setCiudades]= useState(undefined)
    
    const handleSubmit = async (form,setForm) => {
        if (Object.keys(allErrors).some(section => Object.keys(allErrors[section]).length > 0)) {
            console.log( Object.keys(allErrors).filter(section => Object.keys(allErrors[section]).length > 0))
            toast.error('Por favor, corrige los errores en el formulario.', {
                position: 'top-center',
            });
            return;
        }else if(validarFormulario(form) == false){
            toast.error('Tiene campos vacios.', {
                position: 'top-center',
            });
            return;
        } else {
            try {
                console.log(form) 
                const response = await addCard(form,"volunteers");
                setForm({
                    nombre: "",
                    apellido: "",
                    fecha_nacimiento: "",
                    email: "",
                    telefono: "",
                    ocupacion: "",
                    provincia: "",
                    ciudad: "",
                    barrio: "",
                    horario_voluntariado: "", 
                    proyecto_interes: "",
                    vehiculo: false 
                }) 
                toast.success('Hey el formulario que enviaste fue un éxito 👋!', {
                    position: 'top-center',
                  });
                console.log(response);
            } catch (error) {
                alert("Elemento no cargado,ocurrió un error!.");
                console.error(error);
        }
    }
    };

    const fetchCiudades = async (provincia) => {
        if(provincia == "" ){
            console.log("No esta completa la query")
        }else{

            fetch(URL_FETCH_CIUDAD.concat(provincia).concat("&max=500"),{method:"GET"})
            .then((res) =>res.json())
            .then((data) =>  setCiudades(data.localidades))
            
        }
    }

    
    useEffect(()=>{
        try{
            fetchCiudades(form.provincia);
        }catch(e){
            console.error(e)
        }
            
    },[form.provincia])

    const handleSectionErrors = (sectionName, errors) => {
        setAllErrors({ ...allErrors, [sectionName]: errors });
    };
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({
            ...form,
            [e.target.name]: value,
        });
    };

    


    const handleChangeOptions = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

 

    return (

        <div className="container">
            <form className="form-container">
            <ToastContainer></ToastContainer>
            <h2>Informacion personal</h2>
                <FormSectionPersonalInfo 
                handleChange={handleChange} 
                formValues={form} 
                onErrors={(errors) => handleSectionErrors('personal', errors)} />

                <h2>Direccion</h2>
                <FormSectionAddres Provincias={Provincias} 
                handleChangeOptions={handleChangeOptions} 
                ciudades={ciudades}
                 formValues={form} 
                 handleChange={handleChange}
                  onErrors={(errors) => handleSectionErrors('address', errors)} />

                <h2>Voluntariado</h2>
                <FormSectionProjects
                 handleChangeOptions={handleChangeOptions}
                 handleChange={handleChange} 
                 formValues={form}
                 onErrors={(errors) => handleSectionErrors('projects', errors)} />
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

  
  
