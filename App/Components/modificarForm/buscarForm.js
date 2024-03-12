import { ColeccionesSimples } from "../../../js/classes.js";

export class BuscarForm extends HTMLElement {
    constructor () {
        super();
        this.listaItems = [];
        this.render();
    }

    async render( titulo, coleccion ) {

        if ( coleccion ) {
            const items = new ColeccionesSimples( {}, coleccion );
            this.listaItems = await items.get();
        }

        const selectItems = this.listaItems.map( item => {
            return `<option value="${item.id}">${item.nombre}</option>`;
        } ).join( '' );

        this.innerHTML = `
            <h1>Buscar ${titulo}</h1>
            <form id="buscarForm" class="row gap-3 mb-4">
                <div class="col-md-6">
                    <label for="item" class="form-label title">Seleccionar ${titulo}</label>
                    <select class="form-select" id="item">
                        <option selected disabled value="">Seleccione una ${titulo}</option>
                        ${selectItems}
                    </select>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary mt-3 w-auto">Buscar</button>
                </div>
                
            </form>
            <div id="info" style="display: none;">
            </div>
        `;

        const buscarForm = this.querySelector( '#buscarForm' );
        buscarForm.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const itemId = this.querySelector( '#item' ).value;
            const item = this.listaItems.find( item => item.id === itemId );

            this.mostrarInfo( item, titulo );
        } );
    }

    mostrarInfo( item, titulo ) {
        const infoDiv = this.querySelector( '#info' );
        infoDiv.innerHTML = `
            <h2>Información ${titulo}</h2>
            <p><strong>Nombre:</strong> ${item.nombre}</p>
        `;
        infoDiv.style.display = 'block';
    }
}

customElements.define( "form-buscar", BuscarForm );
