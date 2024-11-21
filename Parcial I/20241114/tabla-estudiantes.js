class TablaEstudiantes extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: "open" });

        this.tableContainer = document.createElement("div");
        this.tableContainer.classList.add("table-container");

        this.estilo = document.createElement("style");
        this.estilo.textContent = ``;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.tableContainer);
    }

    connectedCallback() {
        this.render();
    }

    render = () => {
        this.tableContainer.innerHTML = "";

        const estudiantes = [
            { nombre: 'Juanito', edad: 20, ciudad: "Quito" },
            { nombre: 'Anita', edad: 19, ciudad: "Ambato" },
            { nombre: 'Pepito', edad: 20, ciudad: "Ibarra" },
            { nombre: 'Jaimito', edad: 20, ciudad: "Riobamba" },
            { nombre: 'Britanny', edad: 18, ciudad: "Sangolqui" }
        ];

        const tabla = document.createElement("table");

        const headerRow = document.createElement("tr");
        const headers = ["Nombre", "Edad", "Ciudad"];
        headers.forEach(h => {
            const header = document.createElement("th");
            header.textContent = h;
            headerRow.appendChild(header);
        });
        tabla.appendChild(headerRow);

        estudiantes.forEach(estudiante => {
            const fila = document.createElement("tr");

            //crear un objeto 
            Object.values(estudiante).forEach(e => {
                const celda = document.createElement('td');
                celda.textContent = e;
                fila.appendChild(celda);
            });

            tabla.appendChild(fila);
        });


        this.tableContainer.appendChild(tabla);
    }
}

window.customElements.define("tabla-estudiantes", TablaEstudiantes);