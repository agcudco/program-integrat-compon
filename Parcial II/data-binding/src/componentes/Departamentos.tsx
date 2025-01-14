import React, { useState } from "react";

interface Departamento {
    id: number;
    nombre: string;
}

const Departamentos: React.FC = () => {
    const [departamentos, setDepartamentos] = useState<Departamento[]>([
        { id: 1, nombre: 'Informática' },
        { id: 2, nombre: 'Recursos Humanos' },
        { id: 3, nombre: 'Ventas' }
    ]);
    const [nombre, setNombre] = useState<string>('');


    const agregarDepartamento = () => {
        if (nombre.trim() !== '') {
            const nuevoDepartamento: Departamento = {
                id: departamentos.length + 1,
                nombre: nombre
            }
            setDepartamentos([...departamentos, nuevoDepartamento]);
            setNombre('');
        } else {
            alert('El nombre del departamento no puede estar vacío');
        }
    }


    return (
        <div>
            <h1>Departamentos</h1>
            <input
                type="text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                placeholder="Nombre del departamento"
            />
            <button onClick={agregarDepartamento}>Agregar</button>
            <h2>Listado de departamentos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {departamentos.map(departamento => (
                        <tr key={departamento.id}>
                            <td>{departamento.id}</td>
                            <td>{departamento.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Departamentos;