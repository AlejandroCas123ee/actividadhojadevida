import { useState } from "react";

function FormularioDatos() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");

  const continuar = (e) => {
    e.preventDefault();

    alert("Formulario enviado");

    console.log({
      nombre,
      apellido,
      tipoDocumento,
      documento,
      telefono,
      fechaNacimiento,
      genero,
    });
  };

  return (
    <form onSubmit={continuar}>
      <h2>Formulario Hoja de Vida</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <select
        value={tipoDocumento}
        onChange={(e) => setTipoDocumento(e.target.value)}
      >
        <option value="">Seleccione el tipo de documento</option>
        <option value="CC">Cédula</option>
        <option value="TI">Tarjeta de Identidad</option>
        <option value="CE">Cédula de Extranjería</option>
      </select>

      <input
        type="text"
        placeholder="Documento"
        value={documento}
        onChange={(e) => setDocumento(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <input
        type="date"
        value={fechaNacimiento}
        onChange={(e) => setFechaNacimiento(e.target.value)}
      />

      <div>
        <label>
          <input
            type="radio"
            value="Masculino"
            checked={genero === "Masculino"}
            onChange={(e) => setGenero(e.target.value)}
          />
          Masculino
        </label>

        <label>
          <input
            type="radio"
            value="Femenino"
            checked={genero === "Femenino"}
            onChange={(e) => setGenero(e.target.value)}
          />
          Femenino
        </label>
      </div>

      <button type="submit">Continuar</button>
    </form>
  );
}

export default FormularioDatos;