import { useState } from "react";

import Header from "./components/Header";
import FormularioDatos from "./components/FormularioDatos";
import FormularioAcademico from "./components/FormularioAcademico";
import FormularioExperiencia from "./components/FormularioExperiencia";
import VistaPrevia from "./components/VistaPrevia.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

function App() {
  const [paso, setPaso] = useState(1);

  const [datos, setDatos] = useState({});
  const [academico, setAcademico] = useState({});
  const [experiencia, setExperiencia] = useState([]);

  return (
    <div className="contenedor">

      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="contenido">

        {/* Paso 1 - Datos personales */}
        {paso === 1 && (
          <FormularioDatos
            datos={datos}
            setDatos={setDatos}
            siguiente={() => setPaso(2)}
          />
        )}

        {/* Paso 2 - Información académica */}
        {paso === 2 && (
          <FormularioAcademico
            datos={academico}
            setDatos={setAcademico}
            anterior={() => setPaso(1)}
            siguiente={() => setPaso(3)}
          />
        )}

        {/* Paso 3 - Experiencia laboral */}
        {paso === 3 && (
          <FormularioExperiencia
            datos={experiencia}
            setDatos={setExperiencia}
            anterior={() => setPaso(2)}
            siguiente={() => setPaso(4)}
          />
        )}

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

    </div>
  );
}

export default App;