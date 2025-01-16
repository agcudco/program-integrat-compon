import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import GestionUsuarios from './componentes/GestionUsuarios'
import Navbar from './componentes/NavBar'
import Home from "./componentes/Home";
import Contact from "./componentes/Contact";
import './App.css';
import {useEffect, useState} from "react";
import Departamentos from "./componentes/Departamentos";
import Empleados from "./componentes/Empleados";
import Login from "./componentes/Login.tsx";

interface Departamento {
    id: number;
    nombre: string;
}

interface Empleado {
    id: number;
    nombre: string;
    idDepartamento: number;
}

const App: React.FC = () => {

    const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
    const [empleados, setEmpleados] = useState<Empleado[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    //leer los datos del local storage al cargar la aplicacion
    useEffect(() => {
        const storedDepartamentos = localStorage.getItem("departamentos");
        const storedEmpleados = localStorage.getItem("empleados");
        const logeddIn = localStorage.getItem("isAuthenticated");

        if (storedDepartamentos) setDepartamentos(JSON.parse(storedDepartamentos));

        if (storedEmpleados) setEmpleados(JSON.parse(storedEmpleados));

        if (logeddIn === "true") setIsAuthenticated(true);

    }, []);

    useEffect(() => {
        localStorage.setItem("departamentos", JSON.stringify(departamentos));
    }, [departamentos])

    useEffect(() => {
        localStorage.setItem("empleados", JSON.stringify(empleados));
    }, [empleados])

    const handleLogin = (status: boolean) => {
        setIsAuthenticated(status);
        localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    }

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
    }

    return (
        <Router>
            {isAuthenticated && <Navbar onLogout={handleLogout}/>}
            <div style={{padding: "20px"}}>
                <Routes>
                    <Route
                        path="/"
                        element={isAuthenticated ? <Home/> : <Navigate to="/login"/>}
                    />

                    <Route
                        path="/usuarios"
                        element={isAuthenticated ? <GestionUsuarios/> : <Navigate to="/login"/>}
                    />
                    <Route path="/contact" element={<Contact/>}/>

                    <Route path="/departamentos"
                           element={
                               isAuthenticated ?
                                   <Departamentos
                                       departamentos={departamentos}
                                       setDepartamentos={setDepartamentos}
                                   /> : <Navigate to="/login"/>
                           }
                    />
                    <Route
                        path="/empleados"
                        element={
                            isAuthenticated ?
                                <Empleados
                                    departamentos={departamentos}
                                    empleados={empleados}
                                    setEmpleados={setEmpleados}/>
                                : <Navigate to="/login"/>
                        }
                    />
                    <Route
                        path="/login"
                        element={<Login onLogin={handleLogin}/>}
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App
