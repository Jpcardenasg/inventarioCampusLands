import { ColeccionesSimples } from "../../../js/classes.js";

export class EditarForm extends HTMLElement {
    constructor () {
        super();
        this.render();
    }

    async render( titulo, coleccion ) {

        let selectItems = '';

        if ( coleccion ) {
            const items = new ColeccionesSimples( {}, coleccion );
            const listaItems = await items.get();
            selectItems = selectOptions( listaItems );
        }

        function selectOptions( lista ) {
            return lista.map( item => {
                return `<option value="${item.id}">${item.nombre}</option>`;
            } ).join( '' );
        }

        this.innerHTML = `
            <h1>Editar ${titulo}</h1>
            <form id="formularioEditar" class="row gap-3">
                <div class="col-md-6">
                    <label for="items" class="form-label title">${titulo}</label>
                    <select class="form-select" id="items">
                        <option selected disabled value="">Seleccione una opción</option>
                        ${selectItems}
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputEditar" id="labelForm">Nombre</label>
                    <input type="text" class="form-control" id="inputEditar" placeholder="Ingrese el nuevo nombre" required>
                    <button type="submit" class="btn btn-primary mt-3 w-auto ">Editar</button>
                </div>
            </form>
        `;

        const itemSelect = this.querySelector( '#items' );
        const nombreInput = this.querySelector( '#inputEditar' );
        const formularioEditar = this.querySelector( '#formularioEditar' );

        formularioEditar.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const itemId = itemSelect.value;
            const nombre = nombreInput.value;

            if ( coleccion ) {
                const nuevoNombre = new ColeccionesSimples( { nombre }, coleccion );
                await nuevoNombre.update( itemId, { nombre } );
            }

            formularioEditar.reset();
        } );
    }
}

customElements.define( "form-editar", EditarForm );
