class Perfil extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.container = document.createElement("div");
        this.container.classList.add("peril-usuario");
        this.estilo = document.createElement("style");
        this.estilo.textContent = ``;

        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.container);
    }
    connectedCallback() {
        this.render();
    }

    render = () => {

        const profilePic = this.getAttribute('profile-pic')||'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png';
        const username = this.getAttribute('username')||'Usuario'
        const bio = this.getAttribute('bio')||'Biografía corta del usuario';

        this.shadowRoot.querySelector('.peril-usuario').innerHTML=`
            <img src="${profilePic}" alt="Foto del usuario" class="profile-pic"></img>
            <div class="username">${username}</div>
            <div class="bio">${bio}</div>
            <button class="follow-button">Seguir</button>
            <button class="message-button">Mensaje</button>
        `;
    }
}

window.customElements.define("mi-perfil", Perfil);