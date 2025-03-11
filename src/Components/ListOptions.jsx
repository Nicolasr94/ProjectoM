export const ListOptions = ({ props, trigger, defaultLabel,nameSelect}) => {
  let listItems;
  // Object.values(props).map((element) =>{
  //   console.log(element.id)
  // })
  if (props !== undefined) {
    listItems = [<option key="default" value="">{defaultLabel}</option>];
    listItems = listItems.concat(Object.values(props).map((element) => (
      element.name !== undefined?
      <option key={element.id} value={element.id}>
        {element.name}
      </option>:
      <option key={element.id} value={element.nombre}>
      {element.nombre}
    </option>
    )));
  }else{
    listItems = [<option key="default" value="">{defaultLabel}</option>];
  }

  return (
    <select name={nameSelect} id={nameSelect} required onChange={trigger}>
      {listItems}
    </select>
  );
};