import React from 'react'
import GestionUsuarios from './componentes/GestionUsuarios'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Departamentos from './componentes/Departamentos'
import Inicio from './componentes/Inicio'
import Empleados from './componentes/Empleados'

interface Departamento {
  id: number;
  nombre: string;
}


const App: React.FC = () => {

  const departamentos: Departamento[] = [
    { id: 1, nombre: 'Recursos Humanos' },
    { id: 2, nombre: 'Sistemas' },
    { id: 3, nombre: 'Ventas' }
  ]

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/usuarios' element={<GestionUsuarios />} />
          <Route path='/departamentos' element={<Departamentos />} />
          <Route path='/empleados' element={<Empleados departamentos={departamentos}/>} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
