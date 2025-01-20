//Elemento hello-world
class HelloWorld extends HTMLElement {
    constructor() {
        super(); //Sempre chame a função super primeiro no constructor

        this.attachShadow({ mode: "open" }); //Define e retona 'this.shadowRoot'

        const wrapper = document.createElement("h2");
        wrapper.setAttribute("class", "wrapper");

        const hello = wrapper.appendChild(document.createElement("h2"));
        hello.setAttribute("class", "hello");
        hello.textContent= this.getAttribute("world"); //Pega o conteúdo do atributo e coloca dentro do hello h1

        const style = document.createElement("style");
        style.textContent = `
            .wrapper {
                position: relative;
            }

            .hello {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20%;
                font-family: Arial;
                color: green;
            }
        `

        //Aplica os elementos criados no shadow DOM
        this.shadowRoot.append(style, wrapper)
    }
}

//Registrando o custom element na página
customElements.define("hello-world", HelloWorld);
