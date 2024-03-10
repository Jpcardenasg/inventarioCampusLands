import { ColeccionesSimples } from "../../../js/classes.js";

export class formCategoria extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    render() {
        this.innerHTML = `
        
            <h1>Crear Categoría</h1>
            <form id="formularioCategoria">
                <div class="form-group">
                    <label for="inputCategoria" id="labelForm">Nombre de categoría</label>
                    <input type="text" class="form-control" id="inputCategoria" placeholder="Ingrese el nombre de la categoría"
                        required>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Crear</button>
            </form>
    `;

        const nombreInput = document.getElementById( 'inputCategoria' );
        const formularioCategoria = document.getElementById( 'formularioCategoria' );

        formularioCategoria.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const nombre = nombreInput.value;

            const nuevaCategoria = new ColeccionesSimples( { nombre }, 'categorias' );
            await nuevaCategoria.post( { nombre } );

            formularioCategoria.reset();
        } );

    }

}


customElements.define( "form-categoria", formCategoria );