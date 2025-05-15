import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import foto from '/firewatch.jpg'
import './App.css'

function App() {
  let nombre = "Mateo";
  let edad = 21;
  let nacimiento = 2004;
  let empleado = true;
  let titulo = <h2>Soy un titulo</h2>

  return (

    // Podemos usar <> y </> por si no queremos div
    <div>
      <h1 className="violeta">Semana 09</h1>
      <img src={ foto } alt={ nombre }/>
      <p>Hola { nombre.toUpperCase() }</p>
      <p>Edad: { calcularEdad(nacimiento) }</p>
    </div>
  )

  function calcularEdad(nacimiento){
    let actual = new Date().getFullYear();
    return actual - nacimiento;
  }
}

export default App
