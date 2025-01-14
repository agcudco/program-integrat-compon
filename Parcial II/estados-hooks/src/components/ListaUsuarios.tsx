import React, { useEffect, useState } from "react";

interface Usuario {
    id: number;
    name: string;
    email: string;
}

const ListaUsuarios: React.FC = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchUsuarios = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Ocurrió un error al obtener los datos");
                }
                const data: Usuario[] = await response.json();
                setUsuarios(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        }

        fetchUsuarios();

    }, []);

    if (error) {
        return <div>Error: {error}</div>
    }

    if (cargando) {
        return <div>Cargando datos...</div>
    }

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>
                        <strong>{usuario.name}</strong> - {usuario.email}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ListaUsuarios;
