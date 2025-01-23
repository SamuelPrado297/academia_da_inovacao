class CustomModal extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() { //chamado quando o elemento é inserido no DOM
        this.render();

        //Atualiza o estado inicial do modal
        this.updateModalState();
    }

    render() {
        const title = this.getAttribute("title") || "Título do Modal";

        //Criação de conteúdo HTML do modal
        this.shadowRoot.innerHTML = `
            <style>
                /*Centralizando o modal*/
                .modal {
                    display: none;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80%;
                    max-width: 500px;
                    background-color:#bcffab;
                    border-radius: 8px;
                    z-index: 1000;
                    padding: 20px;
                    box-sizing: border-box;
                    font-family: Arial;
                }

                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    backdrop-filter: blur(12.5px);
                    -webkit-backdrop-filter: blur(12.5px);
                    z-index: 999;
                    display: none;
                }

                .header {
                    font-size: 1.5em;
                    margin-bottom: 15px;
                }

                .close-btn {
                    background-color: #6d6b6b;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    border-radius: 8px;
                }

                .close-btn:hover {
                    background-color: #464444;
                }

                .content {
                    margin-bottom: 20px;
                }
            </style>

            <div class="overlay"></div>

                <div class="modal">
                    <div class="header">${title}</div>
                    <div class="content">
                        <slot></slot> <!--Onde o conteúdo dinâmico será renderizado-->
                    </div>
                    <button class="close-btn">Fechar</button>
                </div>
        `;
    
        //evento clique para o botão close-btn
        this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => {
            this.closeModal();
        });
    }

    //Verifica se o modal deve ser exibido pelo atributo open
    updateModalState() {
        const open = this.hasAttribute("open");
        const modal = this.shadowRoot.querySelector('.modal');
        const overlay = this.shadowRoot.querySelector('.overlay');

        if (open) {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        } else {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }
    }

    closeModal() {
        this.removeAttribute('open');
    }

    static get observedAttributes() {
        return ['open'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
            this.updateModalState();
        }
    }
}

customElements.define('custom-modal', CustomModal);
