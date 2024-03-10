import { ColeccionesSimples } from "../../../js/classes.js";

export class formMarca extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    render() {
        this.innerHTML = `
        
            <h1>Crear Marca</h1>
            <form id="formularioMarca">
                <div class="form-group">
                    <label for="inputMarca" id="labelForm">Nombre de la marca</label>
                    <input type="text" class="form-control" id="inputMarca" placeholder="Ingrese el nombre de la marca" required>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Crear</button>
            </form>
    `;

        const nombreInput = document.getElementById( 'inputMarca' );
        const formularioMarca = document.getElementById( 'formularioMarca' );

        formularioMarca.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const nombre = nombreInput.value;

            const nuevaMarca = new ColeccionesSimples( { nombre }, 'marcas' );
            await nuevaMarca.post( { nombre } );

            formularioMarca.reset();
        } );

    }

}


customElements.define( "form-marca", formMarca );