import { Activo, Persona, ColeccionesSimples } from "../../../js/classes.js";


export class EditarActivo extends HTMLElement {
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

        const marcas = new ColeccionesSimples( {}, 'marcas' );
        const listaMarcas = await marcas.get();
        const selectMarcas = selectOptions( listaMarcas );

        const categorias = new ColeccionesSimples( {}, 'categorias' );
        const listaCategorias = await categorias.get();
        const selectCategorias = selectOptions( listaCategorias );

        const tiposActivos = new ColeccionesSimples( {}, 'tipos_activos' );
        const listaTiposActivos = await tiposActivos.get();
        const selectTiposActivos = selectOptions( listaTiposActivos );

        const estados = new ColeccionesSimples( {}, 'estados' );
        const listaEstados = await estados.get();
        const selectEstados = selectOptions( listaEstados );

        const personas = new Persona( {} );
        const listaPersonas = await personas.get();
        let personaIdentificacion;
        const selectPersonas = listaPersonas.map( persona => {
            personaIdentificacion = persona.identificacion;
            return `<option value="${persona.nombre}">${persona.nombre} || ${persona.identificacion}</option>`;
        } );

        function selectOptions( lista ) {
            return lista.map( item => {
                return `<option value="${item.nombre}">${item.nombre}</option>`;
            } ).join( '' );
        }


        this.innerHTML = `

            <h1>Editar Activo</h1>
            <form id="seleccionarActivo" class="row gap-3">
                <div class="col-md-6">
                    <label for="activo" class="form-label title">Seleccionar Activo</label>
                    <select class="form-select" id="activo">
                        <option selected disabled value="">Seleccione un activo</option>
                        ${selectActivos}
                    </select>
                </div>
            </form>

            <h2 class="mt-4 mb-4">Editar</h2>
            <form id="formularioEditarActivo">
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="codigoTransaccion" class="form-label">Código de Transacción</label>
                        <input type="text" class="form-control" id="codigoTransaccion" placeholder="Ingrese el Código de Transacción" required>
                    </div>
                    <div class="col-md-6">
                        <label for="numeroFormulario" class="form-label">Número de Formulario</label>
                        <input type="text" class="form-control" id="numeroFormulario" placeholder="Ingrese el Número de Formulario" required>
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
                        <input type="text" class="form-control" id="valorUnitario" placeholder="Ingrese el Valor Unitario" required>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="proveedor" class="form-label">Proveedor</label>
                        <select class="form-select" id="proveedor">
                        <option selected disabled value="">Seleccione una opción</option>
                            ${selectPersonas}
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="numeroSerial" class="form-label">Número de Serial</label>
                        <input type="text" class="form-control" id="numeroSerial" placeholder="Ingrese el Número de Serial" required>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="empresaResponsable" class="form-label">Empresa Responsable</label>
                        <input type="text" class="form-control" id="empresaResponsable" placeholder="Ingrese la Empresa Responsable" required>
                    </div>
                    <div class="col-md-6">
                        <label for="estado" class="form-label">Estado</label>
                        <select class="form-select" id="estado">
                            ${selectEstados}
                        </select>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                        <label for="descripcion" class="form-label">Descripción Activo</label>
                        <input type="text" class="form-control" id="descripcion" placeholder="Ingrese descripción" required>
                </div>
                <button type="submit" class="btn btn-primary">Editar Activo</button>
            </form>
      `;


        const formularioEditarActivo = this.querySelector( '#formularioEditarActivo' );
        const seleccionarActivo = this.querySelector( '#seleccionarActivo' );

        formularioEditarActivo.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            const activoSelectValue = this.querySelector( '#activo' ).value;
            const codigoTransaccionValue = this.querySelector( '#codigoTransaccion' ).value;
            const numeroFormularioValue = this.querySelector( '#numeroFormulario' ).value;
            const marcaSelectValue = this.querySelector( '#marca' ).value;
            const categoriaSelectValue = this.querySelector( '#categoria' ).value;
            const tipoActivoSelectValue = this.querySelector( '#tipo' ).value;
            const valorUnitarioValue = this.querySelector( '#valorUnitario' ).value;
            const proveedorSelectValue = this.querySelector( '#proveedor' ).value;
            const serialValue = this.querySelector( '#numeroSerial' ).value;
            const empresaResponsableValue = this.querySelector( '#empresaResponsableEditar' ).value;
            const estadoSelectValue = this.querySelector( '#estado' ).value;
            const descripcionValue = this.querySelector( '#descripcion' ).value;

            const activo = {
                "transaccion": codigoTransaccionValue,
                "formulario": numeroFormularioValue,
                "idMarca": marcaSelectValue,
                "idCategoria": categoriaSelectValue,
                "idTipo": tipoActivoSelectValue,
                "valorUnitario": valorUnitarioValue,
                "proveedor": proveedorSelectValue,
                "idProveedor": personaIdentificacion,
                "serial": serialValue,
                "empresa": empresaResponsableValue,
                "idEstado": estadoSelectValue,
                "descripcion": descripcionValue
            };

            const activoEditado = new Activo( activo );
            await activoEditado.update( activoSelectValue, activo );

            formularioEditarActivo.reset();
            seleccionarActivo.reset();
        } );

    }
}
customElements.define( "editar-activo", EditarActivo );