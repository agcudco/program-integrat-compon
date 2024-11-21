class Galeria extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.galeriaContainer = document.createElement('div')
        this.galeriaContainer.classList.add("gallery-container")

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .gallery-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 10px;
                padding: 10px;
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            .gallery-item {
                overflow: hidden;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .gallery-item img {
                width: 100%;
                height: auto;
                display: block;
                transition: transform 0.3s ease;
            }
            .gallery-item img:hover {
                transform: scale(1.1);
            }
        `;


        this.template = document.createElement("template");
        this.template.innerHTML = `
            <div class="gallery-item">
                <img src="" alt="Imagen de la Galeria"></img>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.galeriaContainer);
    }

    connectedCallback() {
        this.render();
    }

    render = () => {

        this.galeriaContainer.innerHTML = "";
        const imagenes = [
            "https://ligapro.ec/wp-content/uploads/2024/04/BSC.png",
            "https://ligapro.ec/wp-content/uploads/2024/05/imbabura2.png",
            "https://cometligapro.blob.core.windows.net/comet/Escudos/INDEPENDIENTE%20DEL%20VALLE_ESCUDO_20240628194625047.png",
            "https://ligapro.ec/wp-content/uploads/2024/04/SDA.png",
            "https://ligapro.ec/wp-content/uploads/2024/04/BSC.png",
            "https://ligapro.ec/wp-content/uploads/2024/05/imbabura2.png",
            "https://cometligapro.blob.core.windows.net/comet/Escudos/INDEPENDIENTE%20DEL%20VALLE_ESCUDO_20240628194625047.png",
            "https://ligapro.ec/wp-content/uploads/2024/04/SDA.png",
            "https://ligapro.ec/wp-content/uploads/2024/05/imbabura2.png"
        ];

        imagenes.forEach(i => {
            const item = this.template.content.cloneNode(true);
            const img = item.querySelector("img");
            img.src = i;
            img.alt = "Imagen de la galeria";
            this.galeriaContainer.appendChild(item);
        });
    }
}

window.customElements.define("mi-galeria", Galeria);