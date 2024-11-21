class UserGallery extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.container = document.createElement('div');
        this.container.classList.add('user-gallery');

        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .user-gallery{
                display:grid;
                grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="user-card">
                <img src="" alt="Avatar">
                <h3></h3>
                <p></p>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.container);
    }

    connectedCallback() {
        const endPoint = this.getAttribute('api-endpoint');
        console.log(endPoint);
        this.fetchData(endPoint);
    }

    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const users = data.data || [];
            this.render(users);
        } catch (error) {
            console.log("error con la api", error);
            this.container.innerHTML = `
                <p class="error-alert">Error con la API</p>
            `;
        }
    }

    render = (users) => {
        this.container.innerHTML = "";
        users.forEach(u => {
            const card = this.template.content.cloneNode(true);
            const img = card.querySelector("img");
            const name = card.querySelector("h3");
            const email = card.querySelector("p");

            img.src = u.avatar;
            img.alt = `Imagen de ${u.first_name} ${u.last_name}`;
            name.textContent = `${u.first_name} ${u.last_name}`;
            email.textContent = u.email;

            this.container.appendChild(card);
        });
    }
}

window.customElements.define('user-gallery', UserGallery);