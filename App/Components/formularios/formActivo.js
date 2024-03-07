export class formActivo extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
        <h1 class="mb-4">Crear Activo</h1>
        <form>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="codigoTransaccion" class="form-label">Código de Transacción</label>
                    <input type="text" class="form-control" id="codigoTransaccion" placeholder="Ingrese el Código de Transacción">
                </div>
                <div class="col-md-6">
                    <label for="numeroFormulario" class="form-label">Número de Formulario</label>
                    <input type="text" class="form-control" id="numeroFormulario" placeholder="Ingrese el Número de Formulario">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="marca" class="form-label">Marca</label>
                    <select class="form-select" id="marca">
                        <option value="1">Marca 1</option>
                        <option value="2">Marca 2</option>
                        <option value="3">Marca 3</option>
                        <!-- Agrega más opciones según sea necesario -->
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="categoria" class="form-label">Categoría</label>
                    <select class="form-select" id="categoria">
                        <option value="1">Categoría 1</option>
                        <option value="2">Categoría 2</option>
                        <option value="3">Categoría 3</option>
                        <!-- Agrega más opciones según sea necesario -->
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="tipo" class="form-label">Tipo</label>
                    <select class="form-select" id="tipo">
                        <option value="1">Tipo 1</option>
                        <option value="2">Tipo 2</option>
                        <option value="3">Tipo 3</option>
                        <!-- Agrega más opciones según sea necesario -->
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="valorUnitario" class="form-label">Valor Unitario</label>
                    <input type="text" class="form-control" id="valorUnitario" placeholder="Ingrese el Valor Unitario">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="proveedor" class="form-label">Proveedor</label>
                    <select class="form-select" id="proveedor">
                        <option value="1">Proveedor 1</option>
                        <option value="2">Proveedor 2</option>
                        <option value="3">Proveedor 3</option>
                        <!-- Agrega más opciones según sea necesario -->
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="numeroSerial" class="form-label">Número de Serial</label>
                    <input type="text" class="form-control" id="numeroSerial" placeholder="Ingrese el Número de Serial">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="empresaResponsable" class="form-label">Empresa Responsable</label>
                    <input type="text" class="form-control" id="empresaResponsable" placeholder="Ingrese la Empresa Responsable">
                </div>
                <div class="col-md-6">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" id="estado">
                        <option value="1">Estado 1</option>
                        <option value="2">Estado 2</option>
                        <option value="3">Estado 3</option>
                        <!-- Agrega más opciones según sea necesario -->
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Crear Activo</button>
        </form>
      `;
    }
}
customElements.define("form-activo", formActivo);