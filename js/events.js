// SIDE MENU: Despliega u oculta el menú lateral
const hamBurger = document.querySelector( ".toggle-btn" );

hamBurger.addEventListener( "click", function () {
    document.querySelector( "#sidebar" ).classList.toggle( "expand" );
} );
