class CustomMenu extends HTMLElement {
    constructor() {
        super();

        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");

        const menuOptions = ["Inicio","QUIENES SOMOS",
            "OFERTA ACADÉMICA",
            "ADMISIÓN",
            "INVESTIGACIÓN",
            "VINCULACIÓN",
            "TRANSPARENCIA",
            "CONTÁCTANOS"];

        menuOptions.forEach(op => {
            const item = document.createElement("li");
            item.textContent = op;
            menuContainer.appendChild(item);
        });

        this.appendChild(menuContainer);
    }
}

window.customElements.define("mi-menu", CustomMenu);