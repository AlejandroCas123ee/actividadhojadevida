import { useState } from "react";
<<<<<<< HEAD

=======
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
import Header from "./components/Header";
import FormularioDatos from "./components/FormularioDatos";
import FormularioAcademico from "./components/FormularioAcademico";
import FormularioExperiencia from "./components/FormularioExperiencia";
<<<<<<< HEAD
import VistaPrevia from "./components/VistaPrevia.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

function App() {
  const [paso, setPaso] = useState(1);

  const [datos, setDatos] = useState({});
  const [academico, setAcademico] = useState({});
  const [experiencia, setExperiencia] = useState([]);
=======
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const [paso, setPaso] = useState(1);
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e

  return (
    <div className="contenedor">

<<<<<<< HEAD
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="contenido">

        {/* Paso 1 - Datos personales */}
        {paso === 1 && (
          <FormularioDatos
            datos={datos}
            setDatos={setDatos}
=======
      <div className="contenido">

        <Header />

        {paso === 1 && (
          <FormularioDatos
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
            siguiente={() => setPaso(2)}
          />
        )}

<<<<<<< HEAD
        {/* Paso 2 - Información académica */}
        {paso === 2 && (
          <FormularioAcademico
            datos={academico}
            setDatos={setAcademico}
=======
        {paso === 2 && (
          <FormularioAcademico
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
            anterior={() => setPaso(1)}
            siguiente={() => setPaso(3)}
          />
        )}

<<<<<<< HEAD
        {/* Paso 3 - Experiencia laboral */}
        {paso === 3 && (
          <FormularioExperiencia
            datos={experiencia}
            setDatos={setExperiencia}
=======
        {paso === 3 && (
          <FormularioExperiencia
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e
            anterior={() => setPaso(2)}
            siguiente={() => setPaso(4)}
          />
        )}

<<<<<<< HEAD
        {/* Paso 4 - Vista previa */}
        {paso === 4 && (
          <VistaPrevia
            datos={datos}
            academico={academico}
            experiencia={experiencia}
            anterior={() => setPaso(3)}
          />
        )}

      </main>

      {/* Footer */}
      <Footer />
=======
        <Footer />

      </div>
>>>>>>> 447dc40440150e96250fdfa10eed13f830dacb2e

    </div>
  );
}

export default App;