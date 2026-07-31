function Formulario() {

    return (

        <div className="formulario">

            <h2>Registro de Aprendices</h2>

            <form>
                <div className="grupo">
                    <label>Fotografía</label>
                    <input type="file" accept="image/*" />
                </div>

                <div className="grupo">
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        placeholder="Ingrese su nombre"
                    />
                </div>

                <div className="grupo">
                    <label>Edad</label>
                    <input
                        type="number"
                        placeholder="Ingrese su edad"
                    />
                </div>

                <div className="grupo">
                    <label>Ciudad</label>
                    <input
                        type="text"
                        placeholder="Ingrese su ciudad"
                    />
                </div>

                <div className="grupo">
                    <label>Programa de formación</label>
                    <input
                        type="text"
                        placeholder="Ejemplo:ADSO"
                    />
                </div>

                <div className="grupo">
                    <label>Correo Electronico</label>
                    <input
                        type="mail"
                        placeholder="correo@sena.edu.co"
                    />
                </div>

                <div className="grupo">
                    <label>Numero de Ficha</label>
                    <input
                        type="number"
                        placeholder="Ingrese la ficha"
                    />
                </div>

                <div className="grupo">
                    <label>Jornada</label>
                    <select>
                        <option>Mañana</option>
                        <option>Tarde</option>
                        <option>Noche</option>
                        <option>Mixta</option>
                    </select>
                </div>

                <button type="submit">
                    Continuar Registro
                </button>
            </form>
        </div>
    );
}

export default Formulario;