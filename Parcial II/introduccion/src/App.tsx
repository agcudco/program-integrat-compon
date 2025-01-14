import './App.css'
import HolaMundo from './components/HolaMundo'
import Mensaje from './components/Mensaje'
import ListaEstudiantes from './components/ListaElementos'

const lstEst = [
  { id: 1, nombre: "Juanito" },
  { id: 2, nombre: 'Anita' }
]

function App() {

  return (
    <>
      <HolaMundo></HolaMundo>
      <Mensaje texto='Hola componente 2' />

      <h1>Lista de estudiantes</h1>
      <ListaEstudiantes estudiantes={lstEst} />
    </>
  )
}

export default App
