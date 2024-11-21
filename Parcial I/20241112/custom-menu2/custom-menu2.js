class MenuPersonalizado extends HTMLElement {
    constructor() {
        super();

        const menuContainer = document.createElement("div");

        menuContainer.classList.add("container-menu");
        
        const menuOptions = [
            { texto: "Inicio", enlace: "index.html", icono: "https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" },
            { texto: "Productos", enlace: "productos.html", icono: "https://static.vecteezy.com/system/resources/thumbnails/041/642/641/small_2x/ai-generated-cleaning-product-isolated-on-transparent-background-png.png" },
            { texto: "Servicios", enlace: "servicios.html", icono: "https://png.pngtree.com/png-clipart/20230329/original/pngtree-operator-silhouette-customer-service-icon-transparent-background-png-image_9008479.png" },
            { texto: "Contacto", enlace: "contacto.html", icono: "https://cdn-icons-png.flaticon.com/512/88/88271.png" }
        ];

        menuOptions.forEach(op => {
            const listItem = document.createElement("li");

            const icon = document.createElement("img");
            icon.src = op.icono;
            //icon.alt = op.texto;
            listItem.appendChild(icon);

            const link = document.createElement("a");
            link.href = op.enlace;
            link.textContent = op.texto;
            listItem.appendChild(link);

            menuContainer.appendChild(listItem);
        });

        this.appendChild(menuContainer);
    }
}

window.customElements.define("custom-menu", MenuPersonalizado);