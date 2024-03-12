import { ColeccionesSimples } from "../../../js/classes.js";

export class formEstado extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    render() {
        this.innerHTML = `
        
            <h1>Crear Estado</h1>
            <form id="formularioEstado">
                <div class="form-group">
                    <label for="inputEstado" id="labelForm">Nombre de estado</label>
                    <input type="text" class="form-control" id="inputEstado" placeholder="Ingrese el nombre del estado"
                        required>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Crear</button>
            </form>
    `;

        const nombreInput = document.getElementById( 'inputEstado' );
        const formularioEstado = document.getElementById( 'formularioEstado' );

        formularioEstado.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const nombre = nombreInput.value;

            const nuevoEstado = new ColeccionesSimples( { nombre }, 'estados' );
            await nuevoEstado.post( { nombre } );

            formularioEstado.reset();
        } );

    }

}


customElements.define( "form-estado", formEstado );