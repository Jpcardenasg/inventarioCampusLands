export class asideMenu extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
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
                    <li class="sidebar-item" id="crearPersona">
                        <a href="#" class="sidebar-link">Crear</a>
                    </li>
                    <li class="sidebar-item" id="buscarPersona">
                        <a href="#" class="sidebar-link">Buscar</a>
                    </li>
                </ul>
              </li>

              <li class="sidebar-item">
                  <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                      data-bs-target="#activos" aria-expanded="false" aria-controls="activos">
                      <i class="lni lni-agenda"></i>
                      <span>Activo</span>
                  </a>
                  <ul id="activos" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                      <li class="sidebar-item" id="crearActivo">
                          <a href="#" class="sidebar-link">Crear</a>
                      </li>
                      <li class="sidebar-item" id="buscarActivo">
                          <a href="#" class="sidebar-link">Buscar</a>
                      </li>
                  </ul>
              </li>

              <li class="sidebar-item">
                  <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                      data-bs-target="#categorias" aria-expanded="false" aria-controls="categorias">
                      <i class="lni lni-agenda"></i>
                      <span>Categorias</span>
                  </a>
                  <ul id="categorias" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                      <li class="sidebar-item" id="crearCategoria">
                          <a href="#" class="sidebar-link">Crear</a>
                      </li>
                      <li class="sidebar-item">
                          <a href="#" class="sidebar-link">Buscar</a>
                      </li>
                  </ul>
              </li>

              <li class="sidebar-item">
                  <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                      data-bs-target="#marcas" aria-expanded="false" aria-controls="marcas">
                      <i class="lni lni-agenda"></i>
                      <span>Marcas</span>
                  </a>
                  <ul id="marcas" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                      <li class="sidebar-item" id="crearMarca">
                          <a href="#" class="sidebar-link">Crear</a>
                      </li>
                      <li class="sidebar-item">
                          <a href="#" class="sidebar-link">Buscar</a>
                      </li>
                  </ul>
              </li>

              <li class="sidebar-item">
                  <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                      data-bs-target="#asignacion" aria-expanded="false" aria-controls="asignacion">
                      <i class="lni lni-agenda"></i>
                      <span>Asignación</span>
                  </a>
                  <ul id="asignacion" class="ps-5 sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                      <li class="sidebar-item">
                          <a href="#" class="sidebar-link">Crear</a>
                      </li>
                      <li class="sidebar-item">
                          <a href="#" class="sidebar-link">Buscar</a>
                      </li>
                  </ul>
              </li>

              
          
      </aside>
      `;
    }
}
customElements.define( "aside-menu", asideMenu );