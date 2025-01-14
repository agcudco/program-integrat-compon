import React, { useState } from 'react';
import './GestionUsuarios.css'; // Importamos el archivo CSS

// Definimos una interfaz para el usuario
interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

const GestionUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]); // Estado para la lista de usuarios
  const [nombre, setNombre] = useState<string>(''); // Estado para el nombre del nuevo usuario
  const [correo, setCorreo] = useState<string>(''); // Estado para el correo del nuevo usuario

  // Función para manejar la adición de un nuevo usuario
  const agregarUsuario = () => {
    if (nombre.trim() && correo.trim()) {
      const nuevoUsuario: Usuario = {
        id: Date.now(),
        nombre,
        correo,
      };
      setUsuarios([...usuarios, nuevoUsuario]); // Actualizamos la lista de usuarios
      setNombre(''); // Limpiamos los campos de entrada
      setCorreo('');
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  // Función para manejar la eliminación de un usuario
  const eliminarUsuario = (id: number) => {
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(usuariosFiltrados);
  };

  return (
    <div className="gestion-usuarios">
      <h1>Gestión de Usuarios</h1>
      <div className="formulario">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} // Data binding para el nombre
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)} // Data binding para el correo
        />
        <button onClick={agregarUsuario} className="btn-agregar">Añadir Usuario</button>
      </div>
      <h2>Lista de Usuarios</h2>
      <ul className="lista-usuarios">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="usuario-item">
            {usuario.nombre} ({usuario.correo})
            <button onClick={() => eliminarUsuario(usuario.id)} className="btn-eliminar">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionUsuarios;
