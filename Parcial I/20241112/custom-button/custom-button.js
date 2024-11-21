class MyCustomButton extends HTMLElement {

    constructor() {
        super();
        const boton = document.createElement("button");
        boton.classList.add("custom-button");
        boton.textContent = "Click Me";
        this.appendChild(boton);
    }
}

window.customElements.define("mi-botoncito",MyCustomButton);