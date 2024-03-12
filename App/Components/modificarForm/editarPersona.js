import { Persona } from "../../../js/classes.js";

export class EditarPersona extends HTMLElement {
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
            <h1>Editar Persona</h1>
            <form id="seleccionarPersona" class="row gap-3">
                <div class="col-md-6">
                    <label for="persona" class="form-label title">Seleccionar Persona</label>
                    <select class="form-select" id="persona">
                        <option selected disabled value="">Seleccione una persona</option>
                        ${selectPersonas}
                    </select>
                </div>
            </form>

            <h2 class="mt-4 mb-4">Editar</h2>
            <form id="formularioEditarPersona">
                <div class="mb-3">
                    <label for="identificacion" class="form-label">Cédula/NIT</label>
                    <input type="text" class="form-control" id="identificacion" placeholder="Ingrese su Cédula/NIT" required>
                </div>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre Completo</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Ingrese el Nombre Completo" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Ingrese el Email" required>
                </div>
                <div class="mb-3">
                    <label for="tipoPersona" class="form-label">Tipo de Persona</label>
                    <select class="form-select" id="tipoPersona">
                        <option value="1">Natural</option>
                        <option value="2">Jurídica</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary w-auto">Editar Persona</button>
            </form>
        `;

        const formularioEditarPersona = this.querySelector( '#formularioEditarPersona' );
        const seleccionarPersona = this.querySelector( '#seleccionarPersona' );

        formularioEditarPersona.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const personaId = this.querySelector( '#persona' ).value;
            const nombreValue = this.querySelector( '#nombre' ).value;
            const emailValue = this.querySelector( '#email' ).value;
            const tipoPersonaValue = this.querySelector( '#tipoPersona' ).value;
            const identificacionValue = this.querySelector( '#identificacion' ).value;

            const persona = {
                "identificacion": identificacionValue,
                "nombre": nombreValue,
                "email": emailValue,
                "idTipo": tipoPersonaValue,
            };

            const personaEditada = new Persona( persona );
            await personaEditada.update( personaId, persona );

            formularioEditarPersona.reset();
            seleccionarPersona.reset();
        } );
    }
}

customElements.define( "editar-persona", EditarPersona );
