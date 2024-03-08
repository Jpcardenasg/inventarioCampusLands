export class formPersona extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
        <h1>Crear persona</h1>
        <form>
                    <div class="mb-3">
                        <label for="cedulaNit" class="form-label">Cédula/NIT</label>
                        <input type="text" class="form-control" id="cedulaNit" placeholder="Ingrese su Cédula/NIT">
                    </div>
                    <div class="mb-3">
                        <label for="nombreCompleto" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="nombreCompleto" placeholder="Ingrese su Nombre Completo">
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
    }
}
customElements.define("form-persona", formPersona);