<<<<<<< HEAD
function FormularioDatos({ datos, setDatos, siguiente }) {

  const actualizar = (campo, valor) => {
    setDatos((anterior) => ({
      ...anterior,
      [campo]: valor
    }));
  };

  const continuar = (e) => {
    e.preventDefault();

    // Nombre
    if (!datos.nombre || !datos.nombre.trim()) {
      alert("Debe ingresar su nombre completo.");
      return;
    }

    // Edad
    if (datos.edad === "" || datos.edad === undefined) {
      alert("Debe ingresar su edad.");
      return;
    }

    if (Number(datos.edad) < 0 || Number(datos.edad) > 100) {
      alert("La edad debe estar entre 0 y 100 años.");
      return;
    }

    // Ciudad
    if (!datos.ciudad || !datos.ciudad.trim()) {
      alert("Debe ingresar su ciudad.");
      return;
    }

    // Programa
    if (!datos.programa || !datos.programa.trim()) {
      alert("Debe ingresar el programa de formación.");
      return;
    }

    // Correo
    if (!datos.correo || !datos.correo.trim()) {
      alert("Debe ingresar su correo electrónico.");
      return;
    }

    if (datos.correo.length > 50) {
      alert("El correo no puede superar los 50 caracteres.");
      return;
    }

    const correoValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo);

    if (!correoValido) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }

    // Ficha
    if (!datos.ficha || !datos.ficha.trim()) {
      alert("Debe ingresar el número de ficha.");
      return;
    }

    // Jornada
    if (!datos.jornada) {
      alert("Debe seleccionar una jornada.");
      return;
    }

    // Si todo está correcto
    siguiente();
=======
import { useState } from "react";

function FormularioDatos({ siguiente }) {

  // Estados del formulario
  const [foto, setFoto] = useState(null);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [correo, setCorreo] = useState("");
  const [programa, setPrograma] = useState("");
  const [ficha, setFicha] = useState("");
  const [jornada, setJornada] = useState("Mañana");

  // Función del botón Continuar
  const continuar = (e) => {

    e.preventDefault();

    alert("Los datos fueron capturados correctamente.");

    if (siguiente) {
      siguiente();
    }
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
  };

  return (
    <div className="formulario">

      <h2>Registro de Aprendices</h2>

      <form onSubmit={continuar}>

        <div className="grupo">
          <label>Fotografía</label>
<<<<<<< HEAD

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const archivo = e.target.files?.[0];

              if (archivo) {
                const imagenURL =
                  URL.createObjectURL(archivo);

                actualizar("foto", imagenURL);
              }
            }}
=======
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          />
        </div>

        <div className="grupo">
          <label>Nombre Completo</label>
<<<<<<< HEAD

          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={datos.nombre || ""}
            onChange={(e) =>
              actualizar("nombre", e.target.value)
            }
=======
          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          />
        </div>

        <div className="grupo">
          <label>Edad</label>
<<<<<<< HEAD

          <input
            type="number"
            min="0"
            max="100"
            placeholder="Ingrese su edad"
            value={datos.edad || ""}
            onChange={(e) =>
              actualizar("edad", e.target.value)
            }
=======
          <input
            type="number"
            placeholder="Ingrese su edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          />
        </div>

        <div className="grupo">
          <label>Ciudad</label>
<<<<<<< HEAD

          <input
            type="text"
            placeholder="Ingrese su ciudad"
            value={datos.ciudad || ""}
            onChange={(e) =>
              actualizar("ciudad", e.target.value)
            }
=======
          <input
            type="text"
            placeholder="Ingrese su ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          />
        </div>

        <div className="grupo">
<<<<<<< HEAD
          <label>Programa de formación</label>

          <input
            type="text"
            placeholder="Ejemplo: ADSO"
            value={datos.programa || ""}
            onChange={(e) =>
              actualizar("programa", e.target.value)
            }
=======
          <label>Programa de Formación</label>
          <input
            type="text"
            placeholder="Ejemplo: ADSO"
            value={programa}
            onChange={(e) => setPrograma(e.target.value)}
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          />
        </div>

        <div className="grupo">
          <label>Correo Electrónico</label>
<<<<<<< HEAD

          <input
            type="email"
            maxLength="50"
            placeholder="correo@sena.edu.co"
            value={datos.correo || ""}
            onChange={(e) =>
              actualizar("correo", e.target.value)
            }
=======
          <input
            type="email"
            placeholder="correo@misena.edu.co"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          />
        </div>

        <div className="grupo">
          <label>Número de Ficha</label>
<<<<<<< HEAD

          <input
            type="number"
            min="1"
            placeholder="Ingrese la ficha"
            value={datos.ficha || ""}
            onChange={(e) =>
              actualizar("ficha", e.target.value)
            }
=======
          <input
            type="number"
            placeholder="Ingrese la ficha"
            value={ficha}
            onChange={(e) => setFicha(e.target.value)}
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
          />
        </div>

        <div className="grupo">
          <label>Jornada</label>

          <select
<<<<<<< HEAD
            value={datos.jornada || ""}
            onChange={(e) =>
              actualizar("jornada", e.target.value)
            }
          >
            <option value="">
              Seleccione una jornada
            </option>

=======
            value={jornada}
            onChange={(e) => setJornada(e.target.value)}
          >
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
            <option>Mixta</option>
          </select>
        </div>

        <button type="submit">
<<<<<<< HEAD
          Continuar Registro
=======
          Continuar registro
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
        </button>

      </form>

    </div>
  );
}

export default FormularioDatos;