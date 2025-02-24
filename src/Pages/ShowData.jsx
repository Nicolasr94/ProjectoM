import { useState } from "react";
import Card from  "../Components/Card";
import {searchBySomeField,getAll} from "../../firebaseConnect";

export default function ShowData(){

    const [dataToRender, setDataToRender] = useState(undefined);
    const [loading, setLoading] = useState(false); // Estado para indicar carga

    const [firstSearch,SetFirstSearch] = useState({
        firstCamp:"",
        secondCamp:"",
        thirdCamp:"",
    });
    const [secondSearch,SetSecondSearch] = useState({
        firstCamp:"",
        secondCamp:""
    });
  
    function resetForms(){
      console.log("entro")
      SetFirstSearch({
        firstCamp:" ",
        secondCamp:" ",
        thirdCamp:" "
    })

    SetSecondSearch({
      firstCamp:" ",
      secondCamp:" "
  })
  return;
    }
   
async function getAllData(parametersFilter){
  setLoading(true); 
  try {
    const data = await getAll(parametersFilter.firstCamp);
    setDataToRender(data); 
  } catch (e) {
    console.error(e);
  
  } finally {
    setLoading(false);
    resetForms()
  }
}  


async function getData(parametersFilter) {
    setLoading(true); 
    try {
      const data = await searchBySomeField(parametersFilter.firstCamp, parametersFilter.secondCamp, parametersFilter.thirdCamp);
      setDataToRender(data); 
    } catch (e) {
      console.error(e);
    
    } finally {
      setLoading(false);
      resetForms()
    }
  }



       
    return <>
    <h2 className="filterH2">Registros, elija filtros para un grupo de personas, o buscar individualmente.</h2>
    <div className="wrapperNavFilters">
        
        <div id="wrapperFilter1" className="wrapperFilter">
        <label>Filtrar el grupo de: 
        <select id="filter" required defaultValue={"none"} onChange={(e)=>SetFirstSearch({...firstSearch,firstCamp:e.target.value}) }>
        <option value="none" >Elija una opción</option>
        <option value="volunteers" >Voluntario</option>
        <option value="cards"  >Persona</option>
        </select>
        </label>

        <label>por: 
        <select id="filter" required defaultValue={"none"} onChange={(e)=>SetFirstSearch({...firstSearch,thirdCamp:e.target.value}) }>
        <option value="none" >Elija una opción</option>
        <option value="region"  >Region</option>
        </select>
        </label>
    <input type="text"  required  value={firstSearch.secondCamp} onChange={(e)=>SetFirstSearch({...firstSearch,secondCamp:e.target.value})}/>
    <button className="btnSubmit"  type="button" onClick={() => getData(firstSearch)} >Filtrar</button>
    </div>

    <div className="wrapperFilter">
        <label>Buscar Persona/Voluntario: 
        <select id="search" required  defaultValue={"none"} onChange={(e)=>SetSecondSearch({...secondSearch,firstCamp:e.target.value})}>
        <option value="none" >Elija una opción</option>
        <option  value="volunteers" >Voluntario</option>
        <option  value="cards" >Persona</option>
        </select>
        </label>
    <input type="text" required value={secondSearch.secondCamp} onChange={(e)=>SetSecondSearch({...secondSearch,secondCamp:e.target.value})}/>
    <button className="btnSubmit"  type="button" onClick={() => getData(secondSearch)}  >Buscar</button>
   </div>
    
    </div>

      {loading === true?<h1>Realizando petición...</h1>:""}
      {dataToRender !== undefined && dataToRender.length > 0 ? ( // Verifica si hay datos y si el array no está vacío
        <section className="layoutCards">
          {dataToRender.map((element, i) => (
              <Card key={i} props={element} />
          ))}
  
        </section>
      ) : (
        <>
        <section className="layoutCards">
          
        </section>
        <h1 className="showData-h1">No hay datos</h1>
        
        </>
      )}
    
 
    </>
}