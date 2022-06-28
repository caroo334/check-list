import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';


function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value) // Permite extraer el valor del campo de texto que ingrese el usuario   
    }

    const manejarEnvio = e => {
        e.preventDefault();
     const tareaNueva = {
        id: uuidv4(), 
        texto: input,
        completada: false
     }
     props.onSubmit(tareaNueva);
    }

    
    return(
        <form 
        className="tarea-formulario"
        onSubmit={manejarEnvio}
        >
            <input className="tarea-input" 
            type='text'
            placeholder="Cosas para hacer..."
            name='texto'
            onChange={manejarCambio}
             />
             <button className="tarea-boton">Agregar Tarea</button>
        </form>
    )
}





export default TareaFormulario;