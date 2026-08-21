import { useState } from "react";

<<<<<<< HEAD
function FormularioAcademico({
  datos,
  setDatos,
  siguiente,
  anterior
}) {

  const [nuevoCurso, setNuevoCurso] = useState("");

  const actualizar = (campo, valor) => {
    setDatos((anterior) => ({
      ...anterior,
      [campo]: valor
    }));
  };

  // ================================
  // AGREGAR CURSO
  // ================================

  const agregarCurso = () => {

    if (!nuevoCurso.trim()) {
      alert("Debe ingresar el nombre del curso.");
      return;
    }

    setDatos((anterior) => ({
      ...anterior,
      cursos: [
        ...(anterior.cursos || []),
        nuevoCurso.trim()
      ]
    }));

    setNuevoCurso("");

  };
  const eliminarCurso = (indice) => {
    setDatos((anterior) => ({
      ...anterior,
      cursos: anterior.cursos.filter(
        (_, i) => i !== indice
      )
    }));
  };

  const continuar = (e) => {

    e.preventDefault();

    // Nivel
    if (!datos.nivel) {
      alert("Debe seleccionar el nivel de formación.");
      return;
    }

    // Título
    if (!datos.titulo || !datos.titulo.trim()) {
      alert("Debe ingresar el título obtenido.");
      return;
    }

    // Cursos
    if (!datos.cursos || datos.cursos.length === 0) {
      alert("Debe agregar al menos un curso realizado.");
      return;
    }

    // Institución
    if (
      !datos.institucion ||
      !datos.institucion.trim()
    ) {
      alert("Debe ingresar la institución educativa.");
      return;
    }

    // Año de graduación
    if (!datos.graduacion) {
      alert("Debe ingresar el año de graduación.");
      return;
    }

    // Validar año
    const año = Number(datos.graduacion);

    if (año < 1950 || año > 2026) {
      alert(
        "El año de graduación debe estar entre 1950 y 2026."
      );
      return;
    }

    // Si todo está correcto
    alert("Información académica guardada correctamente.");

    siguiente();
=======
function FormularioAcademico({ siguiente, anterior }) {

  const continuar = (e) => {
    e.preventDefault();

    alert("Información académica guardada");

    if (siguiente) {
      siguiente();
    }
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
  };

  return (
    <div className="formulario">
<<<<<<< HEAD

      <h2>Información Académica</h2>

      <form onSubmit={continuar}>
        <div className="grupo">

          <label>Nivel de Formación</label>

          <select
            value={datos.nivel || ""}
            onChange={(e) =>
              actualizar("nivel", e.target.value)
            }
          >
            <option value="">
              Seleccione un nivel
            </option>

            <option value="Técnico">
              Técnico
            </option>

            <option value="Tecnólogo">
              Tecnólogo
            </option>

            <option value="Profesional">
              Profesional
            </option>

=======
      <h2>Información Académica</h2>

      <form onSubmit={continuar}>

        <div className="grupo">
          <label>Nivel de Formación</label>
          <select>
            <option>Técnico</option>
            <option>Tecnólogo</option>
            <option>Profesional</option>
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          </select>
        </div>

        <div className="grupo">
          <label>Título Obtenido</label>
<<<<<<< HEAD

          <input
            type="text"
            placeholder="Ingrese el título"
            value={datos.titulo || ""}
            onChange={(e) =>
              actualizar(
                "titulo",
                e.target.value
              )
            }
          />

        </div>

        <div className="grupo">

          <label>Cursos Realizados</label>

          <div className="agregar-curso">

            <input
              type="text"
              placeholder="Ingrese un curso"
              value={nuevoCurso}
              onChange={(e) =>
                setNuevoCurso(e.target.value)
              }
            />

            <button
              type="button"
              onClick={agregarCurso}
            >
              + Agregar
            </button>

          </div>

          <div className="lista-cursos">

            {(datos.cursos || []).map(
              (curso, indice) => (

                <div
                  className="curso-item"
                  key={indice}
                >

                  <span>
                    ✓ {curso}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      eliminarCurso(indice)
                    }
                  >
                    Eliminar
                  </button>

                </div>

              )
            )}

          </div>

=======
          <input
            type="text"
            placeholder="Ingrese el título"
          />
        </div>

        <div className="grupo">
          <label>Cursos Realizados</label>
          <input
            type="text"
            placeholder="Ingrese los cursos"
          />
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
        </div>

        <div className="grupo">
          <label>Institución Educativa</label>
<<<<<<< HEAD

          <input
            type="text"
            placeholder="Ingrese la institución"
            value={datos.institucion || ""}
            onChange={(e) =>
              actualizar(
                "institucion",
                e.target.value
              )
            }
          />

=======
          <input
            type="text"
            placeholder="Ingrese la institución"
          />
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
        </div>

        <div className="grupo">
          <label>Año de Graduación</label>
<<<<<<< HEAD

          <input
            type="number"
            min="1950"
            max="2026"
            placeholder="Ejemplo: 2026"
            value={datos.graduacion || ""}
            onChange={(e) =>
              actualizar(
                "graduacion",
                e.target.value
              )
            }
          />

        </div>

        <button
=======
          <input
            type="number"
            placeholder="Ejemplo: 2026"
          />
        </div>

        <button 
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>

        <button type="submit">
          Siguiente
        </button>

      </form>
<<<<<<< HEAD

=======
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
    </div>
  );
}

export default FormularioAcademico;