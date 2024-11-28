class BookForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.container = document.createElement("div")
        this.estilo = document.createElement("div")
        this.estilo.textContent = ``;

        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
        this.render();
    }

    render = () => {
        this.container.innerHTML = `
            <div class="form-container">
                <h2>Registro de Libros</h2>
                <form id="book-form">
                    <label for="titulo">Titulo</label>
                    <input type="text" name="titulo" id="titulo" required>

                    <label for="autor">Autor</label>
                    <input type="text" name="autor" id="autor" required>

                    <label for="editorial">Editorial</label>
                    <input type="text" name="editorial" id="editorial" required>

                    <label for="no_paginas">Nro Páginas</label>
                    <input type="text" name="no_paginas" id="no_paginas" required>

                    <label for="anio_publicacion">Año</label>
                    <input type="number" name="anio_publicacion" id="anio_publicacion" required>

                    <label for="stock">Stock</label>
                    <input type="number" name="stock" id="stock" required>

                    <label for="estado">Estado</label>
                    <select id="estado" name="estado">
                        <option value=1>Disponible</option>
                        <option value=0>No disponible</option>
                    </select>

                    <button type="submit">Registrar</button>
                </form>
            </div>
        `;

        this.shadowRoot.querySelector("#book-form").addEventListener('submit', this.handleSubmit);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const titulo = this.shadowRoot.querySelector('#titulo').value;
        const autor = this.shadowRoot.querySelector('#autor').value;
        const editorial = this.shadowRoot.querySelector('#editorial').value;
        const no_paginas = this.shadowRoot.querySelector('#no_paginas').value;
        const anio_publicacion = this.shadowRoot.querySelector('#anio_publicacion').value;
        const stock = this.shadowRoot.querySelector('#stock').value;
        const estado = this.shadowRoot.querySelector('#estado').value;

        const newBook = {
            titulo,
            autor,
            editorial,
            no_paginas,
            anio_publicacion,
            stock,
            estado: estado === '1'
        }

        try {
            const response = await fetch('http://localhost:8000/libros', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newBook)
            });

            if (response.ok) {
                alert('Libro registrado');
            } else {
                alert('Error al registrar');
            }
        } catch (error) {
            console.log(`Error al realizar fetch ${error}`);
            this.container.innerHTML = `
                <p class="error-alert">Error con la API</p>
            `;
        }
    }

}

window.customElements.define('book-form', BookForm);