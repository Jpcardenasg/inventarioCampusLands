export class formName extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
        <h1 id="tituloForm"></h1>
            <form>
              <div class="form-group">
                <label for="inputForm" id="labelForm"></label>
                <input type="text" class="form-control" id="inputForm" placeholder="">
              </div>
              <button type="submit" class="btn btn-primary mt-3">Crear</button>
            </form>
      `;
    }
    setTitle(title) {
      const tituloForm = this.querySelector('#tituloForm');
      if (tituloForm) {
          tituloForm.textContent = title;
      }
  }

  setLabel(label) {
      const labelForm = this.querySelector('#labelForm');
      if (labelForm) {
          labelForm.textContent = label;
      }
  }

  setPlaceholder(placeholder) {
      const inputForm = this.querySelector('#inputForm');
      if (inputForm) {
          inputForm.placeholder = placeholder;
      }
  }

}


customElements.define( "form-name", formName );