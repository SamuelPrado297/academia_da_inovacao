class CustomButton extends HTMLElement {
    constructor() {
        super();

        //É recomendável que a criação do Shadow DOM fique guardado em uma variável - by Renato e Herón
        const shadow = this.attachShadow({ mode: "open" });
            
        const button = document.createElement("button");
        button.textContent = this.getAttribute("label-text") || "Clique Aqui!"; //Condicional caso o atributo não for aplicado no HTML, preenche auutomaticamente com "Clique Aqui!"
        
        const style = document.createElement("style");
            style.textContent = `
                button {
                    border: none;
                    border-radius: 5px;
                    padding: 15px;
                    margin-top: 266px;
                    margin-left: 554px;
                    color: white;
                    font-size: 30px;
                    background-color: #00FF40;
                    cursor: pointer;
                }
            `
            
        this.shadowRoot.append(style, button); //style sempre deve vir primeiro no append do Shadow DOM!!
        
        //Cria a função de ao clicar aparecer um console.log() no terminal
        button.addEventListener("click", () => {
                console.log("Botão clicado!")
        });
        
    };
}

customElements.define("custom-button", CustomButton);
