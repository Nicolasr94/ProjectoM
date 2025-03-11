import { ListOptions } from "./ListOptions";

export function FormSectionAddres(
  { Provincias, handleChangeOptions, ciudades, handleChange, formValues },
) {
  return (
    <div className="form-section">
      <label htmlFor="provincia">
        ¿Provincia en la que vivis?:

        <ListOptions
          props={Provincias}
          trigger={(e) => handleChangeOptions(e)}
          defaultLabel={"Elegir provincia"}
          nameSelect={"provincia"}
        >
        </ListOptions>
      </label>
      <label htmlFor="ciudad">
        ¿Ciudad en la que vivís?:

        {ciudades !== undefined
          ? (
            <ListOptions
              props={ciudades}
              trigger={(e) => handleChangeOptions(e)}
              defaultLabel={"Elegir ciudad"}
              nameSelect={"ciudad"}
            >
            </ListOptions>
          )
          : "Cargando ciudades"}

        {}
      </label>

      <label htmlFor="barrio">
        ¿ De que barrio sos?:
        <input
          id="barrio"
          name="barrio"
          value={formValues.barrio}
          onChange={handleChange}
          type="text"
          required
        />
      </label>
    </div>
  );
}
