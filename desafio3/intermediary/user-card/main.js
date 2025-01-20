class UserCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const name = document.createElement("span");
        name.setAttribute("class", "name");
        name.textContent = this.getAttribute("name");

        const email = document.createElement("span");
        email.setAttribute("class", "email");
        email.textContent = this.getAttribute("email");

        const image = document.createElement("img");
        image.setAttribute("src", this.getAttribute("image")); //Forma de fazer a leitura de uma imagem no JavaScript

        const button = document.createElement("button");
        button.textContent = this.getAttribute("label-text") || "Detalhes";

        const style = document.createElement("style")
        style.textContent = `
            .card {
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                width: 200px;
                box-sizing: border-box;
                margin-left: 20px;
                margin-top: 20px;
            }

            img {
                border-radius: 5px;
                object-fit: cover;
            }

            .name {
                font-size: 20px;
                font-family: Arial;
                padding-top: 15px;
            }

            .email {
                font-size: 15px;
                font-family: Arial;
                padding-top: 8px;
                padding-bottom: 20px;
            }

            button {
                border-radius: 8px;
                border: none;
                background-color: #00308F;
                padding: 10px;
                font-size: 16px;
                color: white;
                cursor: pointer;
            }

            button:hover {
                background-color: #002D62;
            }
        `

        this.shadowRoot.append(style, card);
        //nome_do_elemento.append - permite a inserção de outras propriedades dentro de uma
        card.append(image, name, email, button);

        button.addEventListener("click", () => {
            //Para mostrar no console as propriedades de texto, você deve aplicar após a variável o textContent
            console.log(`Detalhes do usuário! \n Nome: ${name.textContent} \n Email: ${email.textContent}\n Imagem: ${image.src}`)
        }); 
    }
}
customElements.define("user-card", UserCard);