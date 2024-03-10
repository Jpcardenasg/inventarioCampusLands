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
            toggleForms( formId );
        } );
    } );

    const hamBurger = document.querySelector( '.toggle-btn' );
    hamBurger.addEventListener( 'click', function () {
        document.querySelector( '#sidebar' ).classList.toggle( 'expand' );
    } );
} );
