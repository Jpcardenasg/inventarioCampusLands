import { ColeccionesSimples } from "../../../js/classes.js";


export class formActivo extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    async render() {

        const marcas = new ColeccionesSimples( 'marcas', 'marcas' );
        const listaMarcas = await marcas.get();
        const selectMarcas = selectOptions( listaMarcas );

        const categorias = new ColeccionesSimples( 'categorias', 'categorias' );
        const listaCategorias = await categorias.get();
        const selectCategorias = selectOptions( listaCategorias );

        const tiposActivos = new ColeccionesSimples( 'tipoActivos', 'tipos_activos' );
        const listaTiposActivos = await tiposActivos.get();
        const selectTiposActivos = selectOptions( listaTiposActivos );

        const estados = new ColeccionesSimples( 'estados', 'estados' );
        const listaEstados = await estados.get();
        const selectEstados = selectOptions( listaEstados );

        function selectOptions( lista ) {
            return lista.map( item => {
                return `<option value="${item.id}">${item.nombre}</option>`;
            } ).join( '' );
        }


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
                    <option selected disabled value="">Seleccione una opción</option>
                        ${selectMarcas}
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="categoria" class="form-label">Categoría</label>
                    <select class="form-select" id="categoria">
                    <option selected disabled value="">Seleccione una opción</option>
                        ${selectCategorias}
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="tipo" class="form-label">Tipo</label>
                    <select class="form-select" id="tipo">
                    <option selected disabled value="">Seleccione una opción</option>
                        ${selectTiposActivos}
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
                    <option selected disabled value="">Seleccione una opción</option>
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
                        ${selectEstados}
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Crear Activo</button>
        </form>
      `;
    }
}
customElements.define( "form-activo", formActivo );