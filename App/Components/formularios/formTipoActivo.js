export class formTipoActivo extends HTMLElement {
constructor() {
super();
this.render();
}
render() {
this.innerHTML = /* html */`
<h1>Crear Tipo de Activo</h1>
        <form>
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre">
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Crear</button>
        </form>
`;
}

}
customElements.define("form-tipoactivo", formTipoActivo);
