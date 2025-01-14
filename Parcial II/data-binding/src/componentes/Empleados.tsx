import { useState } from "react";

interface Empleado {
    id: number;
    nombre: string;
    apellido: string;
    idDepartamento: number;
}

interface Departamento {
    id: number;
    nombre: string;
}

interface EmpleadosProps {
    departamentos: Departamento[];
}

const Empleados: React.FC<EmpleadosProps> = ({ departamentos }) => {
    const [empleados, setEmpleados] = useState<Empleado[]>([]);
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [idDepartamento, setIdDepartamento] = useState<number>(0);


    return (
        <div>
            <h1>Empleados</h1>
            <input type="text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                placeholder="Nombre del empleado"
            />
            <input type="text"
                value={apellido}
                onChange={e => setApellido(e.target.value)}
                placeholder="Apellido del empleado"
            />
            <select
                value={idDepartamento}
                onChange={e => setIdDepartamento(parseInt(e.target.value))}
            >
                <option value={0}>Seleccione su departamento</option>
                {
                    departamentos.map((departamento) => (
                        <option key={departamento.id} value={departamento.id}>
                            {departamento.nombre}
                        </option>
                    ))
                }
            </select>
            <button>Agregar</button>
        </div>
    )
}
export default Empleados;