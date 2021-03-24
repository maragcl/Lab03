import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Content from './content'
import Total from './total'


const App = () => {
  const ejercicio1 = 10
  const ejercicio2= 16
  const ejercicio3=4
  
  return (
    <div>
      <Header titulo="Laboratotio 03" />
      <Content parrafo="Desarrollo de aplicaciones Web Avanzado" 
      excersize= {ejercicio1}/>
      <Content parrafo="Desarrollo de aplicaciones Web Avanzado" 
      excersize= {ejercicio2}/>
      <Content parrafo="Desarrollo de aplicaciones Web Avanzado" 
      excersize= {ejercicio3}/>
      <Total total={ejercicio1+ejercicio2+ejercicio3}/>
    </div>
  )
  /*const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  */
}

ReactDOM.render(<App />, document.getElementById('root'))









/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/


