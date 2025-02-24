import { useParams } from "react-router";
import {useEffect, useState} from "react"
import {getOne} from "../../firebaseConnect.js"
import Card from "../Components/Card.jsx"

export default function ProfileVolunteer (props){
    const { idVolunteer } = useParams();
    const id2 = "Lrd7AmG3kyapX9LXdVxF"
    const [data,setData] = useState(null);
    
    useEffect(() => {
      const fetchToBd = async ()=>{
      try{
    const getData = await getOne("volunteers",idVolunteer)
    setData(getData)
    console.log(data)
    }catch(e){
      console.error("Se produjo un error",e.message)
      setData(null)
    }
  }
  fetchToBd()
    },[idVolunteer])
    
    if (data) {
      return (
        <>
          <Card data={data} /> 
        </>
      );
    } else if (data === null) {
      return <p>Cargando datos...</p>; 
    } else {
      return <p>Error al cargar datos.</p>; 
    }
  }
