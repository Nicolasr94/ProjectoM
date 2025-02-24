
export  const ListOptions = function ListOptions (props){
  props = props.props;
  
let listItems;
if(props !== undefined){
   listItems = Object.values(props).map(element => (
    <option key={element.id || element.name} value={element.id}>{element.name}</option>
  ));
}
return <select onChange={(e)=>getSelectVolunteer(e.value)}>{listItems}</select>;
  }

  
