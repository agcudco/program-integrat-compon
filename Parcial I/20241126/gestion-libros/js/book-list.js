class BookList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.container = document.createElement('div');

        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .error-alert{
            }
        `;

        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
        const apiUrl = this.getAttribute('api-url');
        this.fetchData(apiUrl);
    }

    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const books = data || [];
            this.render(books);
        } catch (error) {
            console.log(`Error al realizar fetch ${error}`);
            this.container.innerHTML = `
                <p class="error-alert">Error con la API</p>
            `;
        }
    }

    render = (books) => {
        if (books.length == 0) {
            this.container.innerHTML = `
                <p class="empty-alert">No existen libros</p>
            `;
            return;
        }

        let tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Nro Paginas</th>
                        <th>Año</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;

        books.forEach(book => {
            tableHtml += `
                <tr>
                    <td>${book.id}</td>
                    <td>${book.titulo}</td>
                    <td>${book.autor}</td>
                    <td>${book.editorial}</td>
                    <td>${book.no_paginas}</td>
                    <td>${book.anio_publicacion}</td>
                    <td>${book.stock}</td>
                    <td>${book.estado ? "Disponible" : "No disponible"}</td>
                    <td>
                        <button class=".btn-update" data-id="${book.id}">Actualizar</button>
                        <button class=".btn-delete" data-id="${book.id}">Eliminar</button>
                    </td>
                </tr>
            `;
        });

        tableHtml += `
                </tbody>
            </table>
        `;

        this.container.innerHTML = tableHtml;

        this.container.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                console.log('Eliminar');
                alert('Eliminar');
            });
        });
    }
}

window.customElements.define('book-list', BookList);