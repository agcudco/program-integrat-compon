class MenuShadow extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const container = document.createElement("div");

        container.classList.add("menu-container");

        const opciones = [
            { item: "Inicio", link: "home.html" },
            { item: "Productos", link: "productos.html" },
            { item: "Servicios", link: "servicios.html" },
            { item: "Contacto", link: "contacto.html" }
        ];

        opciones.forEach(op => {
            const itemList = document.createElement("li");
            const enlace = document.createElement("a");
            enlace.textContent = op.item;
            enlace.href = op.link;
            itemList.appendChild(enlace);
            container.appendChild(itemList);
        });

        const estilo = document.createElement("style");
        estilo.textContent = `
            .menu-container {
    display: flex;
    background-color: black;
    color: white;
    padding: 0;
    list-style-type: none;
}

.menu-container li{
    padding: 1rem;
    cursor: pointer;
}

.menu-container li:hover{
    background-color: cyan;
    color: black;
}
        `;

        shadow.appendChild(estilo);
        shadow.appendChild(container);
    }
}

window.customElements.define("menu-shadow", MenuShadow);