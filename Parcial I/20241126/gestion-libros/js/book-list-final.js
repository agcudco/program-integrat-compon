class BookList extends HTMLElement {
    constructor() {
        super(); // Llamada al constructor de la clase padre
        this.attachShadow({ mode: 'open' }); // Creamos un shadow DOM para encapsulamiento

        // Contenedor principal
        this.container = document.createElement('div');

        // Estilo del componente
        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                font-size: 16px;
                text-align: left;
            }
            th, td {
                padding: 10px;
                border: 1px solid #ccc;
            }
            th {
                background-color: #f4f4f4;
            }
            .actions button {
                margin: 0 5px;
                padding: 5px 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            .btn-update {
                background-color: #4caf50;
                color: white;
            }
            .btn-delete {
                background-color: #f44336;
                color: white;
            }
            .error-alert {
                color: red;
                font-weight: bold;
            }
            .empty-alert {
                color: gray;
                font-style: italic;
            }
        `;

        // Agregamos el estilo y el contenedor al shadow DOM
        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
        // Obtenemos la URL de la API desde el atributo del componente
        const apiUrl = this.getAttribute('api-url');
        this.fetchData(apiUrl);
    }

    // Método para obtener datos desde la API
    fetchData = async (url) => {
        try {
            const response = await fetch(url); // Llamada a la API
            const data = await response.json(); // Parseamos la respuesta
            const books = data || []; // Asumimos que la respuesta contiene una lista de libros
            this.render(books); // Pasamos los datos al render
        } catch (error) {
            console.error("Error con la API", error);
            this.container.innerHTML = `
                <p class="error-alert">Error con la API</p>
            `;
        }
    };

    // Método para renderizar la tabla
    render = (books) => {
        if (books.length === 0) {
            // Si no hay libros disponibles, mostramos un mensaje
            this.container.innerHTML = `
                <p class="empty-alert">No hay libros disponibles</p>
            `;
            return;
        }

        // Generamos el encabezado de la tabla
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Páginas</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Generamos las filas con forEach
        books.forEach((book) => {
            tableHTML += `
                <tr>
                    <td>${book.id}</td>
                    <td>${book.titulo}</td>
                    <td>${book.autor}</td>
                    <td>${book.editorial}</td>
                    <td>${book.no_paginas}</td>
                    <td>${book.stock}</td>
                    <td>${book.estado ? "Disponible" : "No disponible"}</td>
                    <td class="actions">
                        <button class="btn-update" data-id="${book.id}">Actualizar</button>
                        <button class="btn-delete" data-id="${book.id}">Eliminar</button>
                    </td>
                </tr>
            `;
        });

        // Cerramos la tabla
        tableHTML += `
                </tbody>
            </table>
        `;

        // Insertamos el contenido de la tabla en el contenedor
        this.container.innerHTML = tableHTML;

        // Asignamos eventos a los botones de eliminación
        this.container.querySelectorAll('.btn-delete').forEach((button) => {
            button.addEventListener('click', () => this.handleDelete(button.dataset.id));
        });
    };

    // Método para manejar la eliminación
    handleDelete = async (id) => {
        // Mostrar confirmación antes de eliminar
        const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar el libro con ID: ${id}?`);
        if (confirmDelete) {
            try {
                // Enviar solicitud DELETE para eliminar el libro
                const response = await fetch(`http://localhost:8000/libros/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    alert('Libro eliminado con éxito');
                    // Actualizar la lista de libros después de la eliminación
                    const apiUrl = this.getAttribute('api-url');
                    this.fetchData(apiUrl);
                } else {
                    alert('Error al eliminar el libro');
                }
            } catch (error) {
                console.error("Error en la eliminación", error);
                alert('Error con la conexión de la API');
            }
        }
    };
}

// Definimos el custom element
window.customElements.define('book-list',BookList)