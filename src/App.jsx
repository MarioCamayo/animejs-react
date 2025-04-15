import './App.css'
import AnimacionCuadro from './components/AnimacionCuadro'
import AnimacionLados from './components/AnimacionLados'
import TituloAnimado from './components/TituloAnimado/TituloAnimado '
import TituloAnimado2 from './components/TituloAnimado2/TituloAnimado2'
import TituloAnimado3 from './components/TituloAnimado3/TituloAnimado3'

function App() {

  return (
    <div className="App">
      <h1>Ejemplo con Anime.js</h1>
      {/* <AnimacionCuadro /> */}
      {/* <AnimacionLados /> */}
      {/* <TituloAnimado /> */}
      {/* <TituloAnimado2 /> */}
      <TituloAnimado3 />
    </div>
  )
}

export default App
