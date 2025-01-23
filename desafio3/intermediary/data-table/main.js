class DataTable extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this._data = [];
        this._sortColumn = null;
        this._sortDirection = 1; //1 para ascendente, -1 para descendente
        
        const style = document.createElement('style');
            style.textContent = `
                /* Estilos básicos da tabela */
                * {
                    font-family: Arial;
                }

                :host {
                    display: block;
                    overflow-x: auto;
                    margin: 20px;
                }
    
                table {
                    width: 100%;
                    border-collapse: collapse;
               }
    
                th, td {
                    padding: 8px;
                    text-align: left;
                    border: 1px solid #ddd;
                }
    
                th {
                    cursor: pointer;
                    background-color: #f4f4f4;
                }
    
                th:hover {
                    background-color: #e0e0e0;
                }
    
                tr:hover {
                    background-color: #f9f9f9;
                }
            `;
            this.shadowRoot.appendChild(style);
    }

    //Observando mudanças no atributo 'data'
    static get observedAttributes() {
        return ['data'];
    }

    //Quando o atributo 'data' muda, a tabela é atualizada
    attributeChangedCallback(name, newValue) {
        if (name === 'data' && newValue) {
            this._data = JSON.parse(newValue);
            this.render();
        }
    }

    //Ordena os dados
    sortData(column) {
        if (this._sortColumn === column) {
            this._sortDirection *= -1; //Inverte a direção da ordenação se a coluna já estiver ordenada
        } else {
            //Ordena por uma nova coluna
            this._sortColumn = column;
            this._sortDirection = 1;
        }

        this._data.sort((a, b) => {
            if (a[column] < b[column]) return -1 * this._sortDirection;
            if (a[column] > b[column]) return 1 * this._sortDirection;
            return 0;
        });

        this.render();
    }

    //Renderiza a tabela na tela
    render() {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        if (this._data.length > 0) {
            //Cria cabeçalho com base nas chaves dos dados
            const headers = Object.keys(this._data[0]);
            const headerRow = document.createElement('tr') //linha da tabela
            headers.forEach((header) => {
                const th = document.createElement('th');
                th.textContent = header;
                th.onclick = () => this.sortData(header); //Adiciona funcionalidade de ordenação
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);

            //Criando as linhas de dados
            this._data.forEach((row) => {
                const tr = document.createElement('tr');
                headers.forEach((header) => {
                    const td = document.createElement('td');
                    td.textContent = row[header];
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
        }

        const previousTable = this.shadowRoot.querySelector('table');
        if (previousTable) {
            previousTable.remove() 
        }
        this.shadowRoot.appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);
    }
}

customElements.define('data-table', DataTable);

//Inicializando o componente após carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    const dataTableElement = document.getElementById('myTable');
    dataTableElement.setAttribute('data', dataTableElement.getAttribute('data'));
});