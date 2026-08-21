import { useState } from "react";

<<<<<<< HEAD
function FormularioExperiencia({
  datos,
  setDatos,
  anterior,
  siguiente
}) {

  const [nuevaExperiencia, setNuevaExperiencia] =
    useState({
      empresa: "",
      cargo: "",
      tiempo: "",
      funciones: "",
      habilidades: ""
    });

  const [errores, setErrores] = useState({});


  const actualizar = (campo, valor) => {
    setNuevaExperiencia((anterior) => ({
      ...anterior,
      [campo]: valor
    }));

    if (errores[campo]) {
      setErrores((anterior) => ({
        ...anterior,
        [campo]: ""
      }));
    }
  };


  // ================================
  // AGREGAR EXPERIENCIA
  // ================================

  const agregarExperiencia = () => {

    const nuevosErrores = {};

    if (!nuevaExperiencia.empresa.trim()) {
      nuevosErrores.empresa =
        "Debe ingresar la empresa.";
    }

    if (!nuevaExperiencia.cargo.trim()) {
      nuevosErrores.cargo =
        "Debe ingresar el cargo.";
    }

    if (!nuevaExperiencia.tiempo.trim()) {
      nuevosErrores.tiempo =
        "Debe ingresar el tiempo de experiencia.";
    }

    if (!nuevaExperiencia.funciones.trim()) {
      nuevosErrores.funciones =
        "Debe ingresar las funciones desempeñadas.";
    }

    if (!nuevaExperiencia.habilidades.trim()) {
      nuevosErrores.habilidades =
        "Debe ingresar las habilidades técnicas.";
    }


    setErrores(nuevosErrores);


    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    setDatos((anterior) => [
      ...anterior,
      nuevaExperiencia
    ]);

    setNuevaExperiencia({
      empresa: "",
      cargo: "",
      tiempo: "",
      funciones: "",
      habilidades: ""
    });
    setErrores({});
  };

  const eliminarExperiencia = (indice) => {
    setDatos((anterior) =>
      anterior.filter(
        (_, i) => i !== indice
      )
    );
  };

  const continuar = (e) => {
    e.preventDefault();

    if (datos.length === 0) {

      alert(
        "Debe agregar al menos una experiencia laboral antes de continuar."
      );

      return;
    }

    siguiente();
  };
  return (
    <div className="formulario">

      <h2>Experiencia Laboral</h2>

      <form onSubmit={continuar}>

        <div className="grupo">

          <label>Empresa</label>

          <input
            type="text"
            placeholder="Ingrese la empresa"
            value={nuevaExperiencia.empresa}
            onChange={(e) =>
              actualizar(
                "empresa",
                e.target.value
              )
            }
          />

          {errores.empresa && (
            <span className="error">
              {errores.empresa}
            </span>
          )}

        </div>

        <div className="grupo">
          <label>Cargo</label>

          <input
            type="text"
            placeholder="Ingrese el cargo"
            value={nuevaExperiencia.cargo}
            onChange={(e) =>
              actualizar(
                "cargo",
                e.target.value
              )
            }
          />

          {errores.cargo && (
            <span className="error">
              {errores.cargo}
            </span>
          )}

        </div>

        <div className="grupo">
          <label>Tiempo de Experiencia</label>

          <input
            type="text"
            placeholder="Ejemplo: 1 año"
            value={nuevaExperiencia.tiempo}
            onChange={(e) =>
              actualizar(
                "tiempo",
                e.target.value
              )
            }
          />

          {errores.tiempo && (
            <span className="error">
              {errores.tiempo}
            </span>
          )}

        </div>

        <div className="grupo">
          <label>Funciones Desempeñadas</label>

          <input
            type="text"
            placeholder="Escriba las funciones"
            value={nuevaExperiencia.funciones}
            onChange={(e) =>
              actualizar(
                "funciones",
                e.target.value
              )
            }
          />

          {errores.funciones && (
            <span className="error">
              {errores.funciones}
            </span>
          )}

        </div>

        <div className="grupo">
          <label>Habilidades Técnicas</label>

          <input
            type="text"
            placeholder="Ejemplo: HTML, CSS, JavaScript..."
            value={nuevaExperiencia.habilidades}
            onChange={(e) =>
              actualizar(
                "habilidades",
                e.target.value
              )
            }
          />

          {errores.habilidades && (
            <span className="error">
              {errores.habilidades}
            </span>
          )}

        </div>

        <button
          type="button"
          onClick={agregarExperiencia}
        >
          + Agregar Experiencia
        </button>

        <div className="lista-experiencias">

          <h3>Experiencias agregadas</h3>

          {datos.length === 0 ? (

            <p>
              No hay experiencias registradas.
            </p>

          ) : (

            datos.map(
              (experiencia, indice) => (

                <div
                  className="experiencia-item"
                  key={indice}
                >

                  <h4>
                    {experiencia.empresa}
                  </h4>

                  <p>
                    <strong>Cargo:</strong>{" "}
                    {experiencia.cargo}
                  </p>

                  <p>
                    <strong>Tiempo:</strong>{" "}
                    {experiencia.tiempo}
                  </p>

                  <p>
                    <strong>Funciones:</strong>{" "}
                    {experiencia.funciones}
                  </p>

                  <p>
                    <strong>Habilidades:</strong>{" "}
                    {experiencia.habilidades}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      eliminarExperiencia(
                        indice
                      )
                    }
                  >
                    Eliminar
                  </button>

                </div>

              )
            )

          )}

        </div>
        <div className="botones">

          <button
            type="button"
            onClick={anterior}
          >
            Anterior
          </button>

          <button type="submit">
            Vista Previa
          </button>

        </div>

      </form>

    </div>
  );
=======
function FormularioExperiencia({ siguiente, anterior }) {

    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [funciones, setFunciones] = useState("");
    const [habilidades, setHabilidades] = useState("");

    const continuar = (e) => {

        e.preventDefault();

        alert("Experiencia laboral guardada.");

        if (siguiente) {
            siguiente();
        }

    };

    return (

        <div className="formulario">

            <h2>Experiencia Laboral</h2>

            <form onSubmit={continuar}>

                <div className="grupo">
                    <label>Empresa</label>

                    <input
                        type="text"
                        placeholder="Nombre de la empresa"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Cargo</label>

                    <input
                        type="text"
                        placeholder="Cargo desempeñado"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Tiempo de experiencia</label>

                    <input
                        type="text"
                        placeholder="Ej: 2 años"
                        value={tiempo}
                        onChange={(e) => setTiempo(e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Funciones desempeñadas</label>

                    <textarea
                        rows="5"
                        placeholder="Describa las funciones realizadas"
                        value={funciones}
                        onChange={(e) => setFunciones(e.target.value)}
                    ></textarea>
                </div>

                <div className="grupo">
                    <label>Habilidades Técnicas</label>

                    <textarea
                        rows="5"
                        placeholder="Ejemplo: Java, React, MySQL..."
                        value={habilidades}
                        onChange={(e) => setHabilidades(e.target.value)}
                    ></textarea>
                </div>

                <button
                    type="button"
                    onClick={anterior}
                >
                    Anterior
                </button>

                <button type="submit">
                    Vista previa
                </button>

            </form>

        </div>

    );

>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
}

export default FormularioExperiencia;