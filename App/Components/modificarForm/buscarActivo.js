import { Activo } from "../../../js/classes.js";

export class BuscarActivo extends HTMLElement {
    constructor () {
        super();
        this.render();
    }

    async render() {
        const activos = new Activo( {} );
        const listaActivos = await activos.get();
        const selectActivos = listaActivos.map( activo => {
            return `<option value="${activo.id}">${activo.descripcion}</option>`;
        } ).join( '' );

        this.innerHTML = `
            <h1>Buscar Activo</h1>
            <form id="buscarActivoForm" class="row gap-3 mb-4">
                <div class="col-md-6">
                    <label for="activo" class="form-label title">Seleccionar Activo</label>
                    <select class="form-select" id="activo">
                        <option selected disabled value="">Seleccione un activo</option>
                        ${selectActivos}
                    </select>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary w-auto">Buscar</button>
                </div>

            </form>
            <div id="infoActivo" style="display: none;">
            </div>
        `;

        const buscarActivoForm = this.querySelector( '#buscarActivoForm' );
        buscarActivoForm.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const activoId = this.querySelector( '#activo' ).value;
            const activo = listaActivos.find( activo => activo.id === activoId );

            this.mostrarInfoActivo( activo );
        } );
    }

    mostrarInfoActivo( activo ) {
        const infoActivoDiv = this.querySelector( '#infoActivo' );
        infoActivoDiv.innerHTML = `
            <h2>Información del Activo</h2>
            <p><strong>Código de Transacción:</strong> ${activo.transaccion}</p>
            <p><strong>Número de Formulario:</strong> ${activo.formulario}</p>
            <p><strong>Marca:</strong> ${activo.idMarca}</p>
            <p><strong>Categoría:</strong> ${activo.idCategoria}</p>
            <p><strong>Tipo:</strong> ${activo.idTipo}</p>
            <p><strong>Valor Unitario:</strong> ${activo.valorUnitario}</p>
            <p><strong>Proveedor:</strong> ${activo.proveedor}</p>
            <p><strong>Número de Serial:</strong> ${activo.serial}</p>
            <p><strong>Empresa Responsable:</strong> ${activo.empresa}</p>
            <p><strong>Estado:</strong> ${activo.idEstado}</p>
            <p><strong>Descripción:</strong> ${activo.descripcion}</p>
        `;
        infoActivoDiv.style.display = 'block';
    }
}

customElements.define( "buscar-activo", BuscarActivo );
