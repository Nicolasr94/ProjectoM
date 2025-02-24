import "./Card.css";
import { Link } from "react-router";
export default function Card({props}) {

    console.log("card llego esto")
console.log(props)
    
    function transformDate (date){
        const fecha = { seconds:date.seconds, nanoseconds:date.nanoseconds }; 
        const fechaDate = new Date(fecha.seconds * 1000);
        return fechaDate.toLocaleString();
    }
    // const date = transformDate(props.date)
    if(props == undefined){
        return(<>
        <h1>NO se pudo encontrar los datos solicitados.</h1></>)
    }else{
    return (
        <div className="Card-Wrapper">
            <h1>{props.name == undefined?"Error al detectar nombre":props.name}</h1>

            <hr className="stripe"></hr>
            <p>Edad:{props.age}</p>
            <p>Municipio:{props.region}</p>
            <p>Última fecha de visita:</p>
            <p>Último voluntario consultado:<Link to={`/volunteer/${props.id}`}>  <a>
                <li className="li-Card">
                {props.name}
                </li>
                </a></Link></p>
            <hr className="stripe"></hr>
            {props.phoneNumber !== undefined?<>
            <h3>Número de celular</h3>  
            <p>
                {props.phoneNumber}
            </p></>:""}
            {props.email !== undefined?<>
            <h3>Email</h3>  
            <p>
                {props.email}
            </p></>:""}
            {props.notes !== undefined?<>
            <h3>Información adicional</h3>  
            <p>
                {props.notes}
            </p></>:""}
            
        </div>
    );
}
}