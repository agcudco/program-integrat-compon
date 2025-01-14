import React from "react";

type Estudiante = {
    id: number;
    nombre: string;
}

type ListaEstudiantesProps = {
    estudiantes: Estudiante[];
}

const ListaEstudiantes: React.FC<ListaEstudiantesProps> = ({ estudiantes }) => {
    return (
        
        <ul>
            {
                estudiantes.map((e) => (
                    <li key={e.id}>{e.nombre}</li>
                ))
            }
        </ul>
    )
}
export default ListaEstudiantes;