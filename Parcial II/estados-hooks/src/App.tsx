
import './App.css'
import ListaUsuarios from './components/ListaUsuarios'
import Contador from './components/UseStateComp'
import GestionUsuarios from './components/GestionUsuarios'

function App() {


  return (
    <div>
      <Contador/>
      <ListaUsuarios></ListaUsuarios>
      <GestionUsuarios></GestionUsuarios>
    </div>
  )
}

export default App
