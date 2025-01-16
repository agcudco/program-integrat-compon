import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Navbar.css";

interface Props {
    onLogout: () => void;
}

const Navbar: React.FC<Props> = ({onLogout}) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate("/login");
    }

    return (
        <nav>
            <Link to="/">
                Inicio
            </Link>
            <Link to="/usuarios">
                Usuarios
            </Link>
            <Link to="/contact">
                Contact
            </Link>
            <Link to="/departamentos">
                Departamentos
            </Link>
            <Link to="/empleados">
                Empleados
            </Link>
            <button onClick={handleLogout}
                    style={{
                        backgroundColor: "transparent",
                        color: "white",
                        padding: "10px",
                        borderRadius: "10px",
                        cursor: "pointer"
                    }}>
                Cerrar Sesion
            </button>

        </nav>
    );
};

export default Navbar;

