import { Activo, Persona, ColeccionesSimples } from "../../../js/classes.js";

export class EliminarForm extends HTMLElement {
    constructor () {
        super();
        this.listaItems = [];
        this.render();
    }

    async render( titulo, coleccion ) {

        const coleccionesSimples = [ 'marcas', 'estados', 'categorias', 'tipos_activos' ];

        if ( coleccionesSimples.includes( coleccion ) ) {

            const items = new ColeccionesSimples( {}, coleccion );
            this.listaItems = await items.get();

        } else if ( coleccion === 'activos' ) {

            const activos = new Activo( {} );
            this.listaItems = await activos.get();

        } else if ( coleccion === 'personas' ) {

            const personas = new Persona( {} );
            this.listaItems = await personas.get();

        }

        const selectItems = this.listaItems.map( item => {
            return `<option value="${item.id}">${item.descripcion || item.nombre}</option>`;
        } ).join( '' );

        this.innerHTML = `
            <h1>Eliminar ${titulo}</h1>
            <form id="eliminarForm" class="row gap-3 mb-4">
                <div class="col-md-6">
                    <label for="item" class="form-label title">Seleccionar ${titulo}</label>
                    <select class="form-select" id="item">
                        <option selected disabled value="">Seleccione ${titulo}</option>
                        ${selectItems}
                    </select>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary w-auto">Eliminar</button>
                </div>
            </form>
        `;

        const eliminarForm = this.querySelector( '#eliminarForm' );
        eliminarForm.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const itemId = this.querySelector( '#item' ).value;

            if ( itemId && item ) {
                try {
                    await this.eliminarElemento( coleccion, itemId );
                    alert( `El elemento ha sido eliminado correctamente.` );

                    eliminarForm.reset();

                } catch ( error ) {
                    console.error( "Error al eliminar el elemento:", error );
                    alert( `Error al eliminar el elemento.` );
                }
            } else {
                alert( `Por favor seleccione un elemento.` );
            }


        } );
    }

    async eliminarElemento( coleccion, itemId ) {
        try {
            if ( coleccion === 'activos' ) {
                const activo = new Activo( {} );
                await activo.delete( itemId );
            } else if ( coleccion === 'personas' ) {
                const persona = new Persona( {} );
                await persona.delete( itemId );
            } else {
                const coleccionSimple = new ColeccionesSimples( {}, coleccion );
                await coleccionSimple.delete( itemId );
            }
        } catch ( error ) {
            throw error;
        }
    }
}

customElements.define( "form-eliminar", EliminarForm );
