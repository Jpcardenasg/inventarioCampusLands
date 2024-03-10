import { ColeccionesSimples } from "../../../js/classes.js";

export class formTipoActivo extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    render() {
        this.innerHTML = `

            <h1>Crear Tipo de Activo</h1>
            <form id="formularioTipoActivo">
                <div class="form-group">
                    <label for="inputTipo" id="labelForm">Nombre de tipo de activo</label>
                    <input type="text" class="form-control" id="inputTipo" placeholder="Ingrese el tipo de activo" required>
                </div>

                <button type="submit" class="btn btn-primary mt-3">Crear</button>
            </form>
            `;

        const nombreInput = document.getElementById( 'inputTipo' );
        const formularioTipoActivo = document.getElementById( 'formularioTipoActivo' );

        formularioTipoActivo.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const nombre = nombreInput.value;

            const nuevoTipo = new ColeccionesSimples( { nombre }, 'tipos_activos' );
            await nuevoTipo.post( { nombre } );

            formularioTipoActivo.reset();
        } );
    }

}
customElements.define( "form-tipoactivo", formTipoActivo );
