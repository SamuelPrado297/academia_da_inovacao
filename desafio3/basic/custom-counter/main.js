class CustomCounter extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        
        //Cria a variável fora do Constructor e transforma ela em uma instância do Custom Element
        this.counter = 0;
        
        //Criação de container para o contador
        const element = document.createElement("p");
        element.textContent = this.counter; //Inicializa o contador com 0
        element.setAttribute("class", "count"); 

        const increment = document.createElement("button");
        increment.setAttribute("class", "increment");
        increment.textContent = this.getAttribute("label-plus") || "Incrementar";

        increment.addEventListener("click", () => {
            this.counter++; //Incrementa a variável "counter"
            element.textContent = this.counter; //Atualiza o conteúdo com base na função aplicada
        });

        const decrement = document.createElement("button");
        decrement.setAttribute("class", "decrement")
        decrement.textContent = this.getAttribute("label-minus") || "Decrementar";

        decrement.addEventListener("click", () => {
            this.counter--;
            element.textContent = this.counter;
        });

        const style = document.createElement("style");
        style.textContent = `
            .increment {
                border: none;
                border-radius: 5px;
                background-color: #00FF40;
                color: white;
                font-size: 20px;
                padding: 10px;
                margin-right: 2px;
                cursor: pointer;
            }

            .decrement {
                border: none;
                border-radius: 5px;
                background-color: #F40009;
                color: white;
                font-size: 20px;
                padding: 10px;
                margin-left: 2px;
                cursor: pointer;
            }

            .count {
                text-align: center;
                font-size: 25px;
                margin-bottom: 40px;
                font: bold;
            }
        `

        this.shadowRoot.append(style, element, increment, decrement); //A ordem que as variáveis são postas no shadowRoot altera sua posição no HTML
    }
}
customElements.define("custom-counter", CustomCounter);