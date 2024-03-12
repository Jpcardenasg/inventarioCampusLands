export class asideMenu extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    render() {
        this.innerHTML = `
        <style rel="stylesheet">
        @import "./App/Components/navMenu/menu.css";
        </style>
        <aside id="sidebar">
            <div class="d-flex">
                <button class="toggle-btn" type="button">
                    <i class="lni lni-grid-alt"></i>
                </button>
                <div class="sidebar-logo">
                    <a href="#">CAMPUSLANDS</a>
                </div>
            </div>

            <ul class="sidebar-nav">

                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#personas" aria-expanded="false" aria-controls="personas">
                        <i class="lni lni-user"></i>
                        <span>Personas</span>
                    </a>
                    <ul id="personas" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item selectItem" data-id="formPersona">
                            <a href="#" class="sidebar-link">Crear</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="editarPersona">
                            <a href="#" class="sidebar-link">Editar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="eliminarForm" data-titulo="Personas" data-coleccion="personas">
                            <a href="#" class="sidebar-link">Eliminar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="buscarPersona">
                            <a href="#" class="sidebar-link">Buscar</a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#activos" aria-expanded="false" aria-controls="activos">
                        <i class="lni lni-layers"></i>
                        <span>Activo</span>
                    </a>
                    <ul id="activos" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item selectItem" data-id="formActivo">
                            <a href="#" class="sidebar-link">Crear</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="editarActivo">
                            <a href="#" class="sidebar-link">Editar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="eliminarForm" data-titulo="Activos" data-coleccion="activos">
                            <a href="#" class="sidebar-link">Eliminar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="buscarActivo">
                            <a href="#" class="sidebar-link">Buscar</a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#categorias" aria-expanded="false" aria-controls="categorias">
                        <i class="lni lni-layout"></i>
                        <span>Categorias</span>
                    </a>
                    <ul id="categorias" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item selectItem" data-id="formCategoria">
                            <a href="#" class="sidebar-link">Crear</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="editarForm" data-titulo="Categorías" data-coleccion="categorias">
                            <a href="#" class="sidebar-link">Editar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="eliminarForm" data-titulo="Categorías" data-coleccion="categorias">
                            <a href="#" class="sidebar-link">Eliminar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="buscarForm" data-titulo="Categorías" data-coleccion="categorias">
                            <a href="#" class="sidebar-link">Buscar</a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#marcas" aria-expanded="false" aria-controls="marcas">
                        <i class="lni lni-checkmark-circle"></i>
                        <span>Marcas</span>
                    </a>
                    <ul id="marcas" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item selectItem" data-id="formMarca">
                            <a href="#" class="sidebar-link">Crear</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="editarForm" data-titulo="Marcas" data-coleccion="marcas">
                            <a href="#" class="sidebar-link">Editar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="eliminarForm" data-titulo="Marcas" data-coleccion="marcas">
                            <a href="#" class="sidebar-link">Eliminar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="buscarForm" data-titulo="Marcas" data-coleccion="marcas">
                            <a href="#" class="sidebar-link">Buscar</a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#estados" aria-expanded="false" aria-controls="estados">
                        <i class="lni lni-flag"></i>
                        <span>Estados</span>
                    </a>
                    <ul id="estados" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item selectItem" data-id="formEstado">
                            <a href="#" class="sidebar-link">Crear</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="editarForm" data-titulo="Estados" data-coleccion="estados">
                            <a href="#" class="sidebar-link">Editar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="eliminarForm" data-titulo="Estados" data-coleccion="estados">
                            <a href="#" class="sidebar-link">Eliminar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="buscarForm" data-titulo="Estados" data-coleccion="estados">
                            <a href="#" class="sidebar-link">Buscar</a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#tipoAct" aria-expanded="false" aria-controls="marcas">
                        <i class="lni lni-control-panel"></i>
                        <span>Tipos de Activo</span>
                    </a>
                    <ul id="tipoAct" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item selectItem" data-id="formTipoActivo">
                            <a href="#" class="sidebar-link">Crear</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="editarForm" data-titulo="Tipos de Activos" data-coleccion="tipos_activos">
                            <a href="#" class="sidebar-link">Editar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="eliminarForm" data-titulo="Tipos de Activos" data-coleccion="tipos_activos">
                            <a href="#" class="sidebar-link">Eliminar</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="buscarForm" data-titulo="Tipos de Activos" data-coleccion="tipos_activos">
                            <a href="#" class="sidebar-link">Buscar</a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#asignacion" aria-expanded="false" aria-controls="asignacion">
                        <i class="lni lni-network"></i>
                        <span>Asignación</span>
                    </a>
                    <ul id="asignacion" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item selectItem" data-id="crearAsignacion">
                            <a href="#" class="sidebar-link">Crear Folio</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="asignarActivo">
                            <a href="#" class="sidebar-link">Asignar Activo</a>
                        </li>
                        <li class="sidebar-item selectItem" data-id="retornarActivo">
                            <a href="#" class="sidebar-link">Retornar Activo</a>
                        </li>
                    </ul>
                </li>

        </aside>

      `;
    }
}
customElements.define( "aside-menu", asideMenu );