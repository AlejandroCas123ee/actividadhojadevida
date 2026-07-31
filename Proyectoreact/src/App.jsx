import { useState } from "react";
import Header from "./components/Header.jsx"
import FormularioDatos from "./components/FormularioDatos.jsx"
import Footer from "./components/Footer.jsx"
import './App.css'

function App() {

    const[paso,setPaso] = useState(1);

  return (
    <div className="contenedor">

      <Header/>
      {
        paso == 1 && <FormularioDatos
         siguiente ={()=>setPaso(2)}
        />
      }
      
      <Footer/>
    </div>
  )
}

export default App;