import React from 'react'
import ReactDOM from 'react-dom'
import Part from './part'
function Content(props) {
    /*return <p>{props.parrafo}-{props.excersize}</p>;*/
    const ejercicio1 = 10
    const ejercicio2= 16
    const ejercicio3=4
    return (
        <div>
            <Part parrafo="Desarrollo de aplicaciones Web Avanzado" 
            excersize= {ejercicio1}/>
            <Part parrafo="Desarrollo de aplicaciones Web Avanzado" 
            excersize= {ejercicio2}/>
            <Part parrafo="Desarrollo de aplicaciones Web Avanzado" 
            excersize= {ejercicio3}/>
        </div>
    )
  }
  export default Content