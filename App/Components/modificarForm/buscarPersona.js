import { Persona } from "../../../js/classes.js";

export class BuscarPersona extends HTMLElement {
    constructor () {
        super();
        this.render();
    }

    async render() {
        const personas = new Persona( {} );
        const listaPersonas = await personas.get();
        const selectPersonas = listaPersonas.map( persona => {
            return `<option value="${persona.id}">${persona.nombre} || ${persona.identificacion}</option>`;
        } ).join( '' );

        this.innerHTML = `
            <h1>Buscar Persona</h1>
            <form id="buscarPersonaForm" class="row gap-3 mb-4">
                <div class="col-md-6">
                    <label for="persona" class="form-label title">Seleccionar Persona</label>
                    <select class="form-select" id="persona">
                        <option selected disabled value="">Seleccione una persona</option>
                        ${selectPersonas}
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Buscar</button>
            </form>
            <div id="infoPersona" style="display: none;">
            </div>
        `;

        const buscarPersonaForm = this.querySelector( '#buscarPersonaForm' );
        buscarPersonaForm.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const personaId = this.querySelector( '#persona' ).value;
            const persona = listaPersonas.find( persona => persona.id === personaId );

            this.mostrarInfoPersona( persona );
        } );
    }

    mostrarInfoPersona( persona ) {
        const infoPersonaDiv = this.querySelector( '#infoPersona' );
        infoPersonaDiv.innerHTML = `
            <h2>Información de la Persona</h2>
            <p><strong>Nombre:</strong> ${persona.nombre}</p>
            <p><strong>Identificación:</strong> ${persona.identificacion}</p>
            <p><strong>Email:</strong> ${persona.email}</p>
            <p><strong>Tipo de Persona:</strong> ${persona.idTipo}</p>
        `;
        infoPersonaDiv.style.display = 'block';
    }
}

customElements.define( "buscar-persona", BuscarPersona );
