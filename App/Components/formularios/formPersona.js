import { Persona } from "../../../js/classes.js";

export class formPersona extends HTMLElement {
    constructor () {
        super();
        this.render();


    }
    async render() {

        this.innerHTML = /* html */`
        <h1>Crear persona</h1>
        <form id="formularioPersona">
                    <div class="mb-3">
                        <label for="identificacion" class="form-label">Cédula/NIT</label>
                        <input type="text" class="form-control" id="identificacion" placeholder="Ingrese su Cédula/NIT">
                    </div>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Ingrese su Nombre Completo">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese su Email">
                    </div>
                    <div class="mb-3">
                        <label for="tipoPersona" class="form-label">Tipo de Persona</label>
                        <select class="form-select" id="tipoPersona">
                            <option value="1">Natural</option>
                            <option value="2">Jurídica</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Crear Persona</button>
                </form>
      `;


        const identificacion = document.getElementById( 'identificacion' );
        const nombre = document.getElementById( 'nombre' );
        const email = document.getElementById( 'email' );
        const tipoPersona = document.getElementById( 'tipoPersona' );
        const formularioPersona = document.getElementById( 'formularioPersona' );


        formularioPersona.addEventListener( 'submit', async ( event ) => {

            event.preventDefault();

            const identificacionValue = identificacion.value;
            const nombreValue = nombre.value;
            const emailValue = email.value;
            const tipoPersonaValue = tipoPersona.value;

            const persona = {
                "identificacion": identificacionValue,
                "nombre": nombreValue,
                "email": emailValue,
                "idTipo": tipoPersonaValue,

            };

            const nuevaPersona = new Persona( persona );
            await nuevaPersona.post( persona );

            formularioPersona.reset();

        } );


    }
}
customElements.define( "form-persona", formPersona );