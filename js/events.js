document.addEventListener( 'DOMContentLoaded', function () {

    const toggleForms = ( formId ) => {

        const formElements = document.querySelectorAll( '.form-element' );
        formElements.forEach( formElement => {
            if ( formElement.id === formId ) {
                formElement.style.display = 'block';
            } else {
                formElement.style.display = 'none';
            }
        } );
        document.getElementById( 'principal' ).style.display = 'none';
    };

    document.querySelectorAll( '.selectItem' ).forEach( item => {
        item.addEventListener( 'click', function () {
            const formId = this.dataset.id;
            const titulo = this.dataset.titulo;
            const coleccion = this.dataset.coleccion;
            toggleForms( formId );
            document.querySelector( 'form-editar' ).render( titulo, coleccion );
            document.querySelector( 'form-buscar' ).render( titulo, coleccion );
        } );
    } );

    const hamBurger = document.querySelector( '.toggle-btn' );
    hamBurger.addEventListener( 'click', function () {
        document.querySelector( '#sidebar' ).classList.toggle( 'expand' );
    } );
} );
