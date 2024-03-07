// SIDE MENU: Despliega u oculta el menú lateral
const hamBurger = document.querySelector( ".toggle-btn" );

hamBurger.addEventListener( "click", function () {
    document.querySelector( "#sidebar" ).classList.toggle( "expand" );
} );

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('crearPersona').addEventListener('click', function () {
        document.getElementById('principal').style.display = 'none';
        document.getElementById('formActivo').style.display = 'none';

        document.getElementById('formPersona').style.display = 'block';
    });

    document.getElementById('crearActivo').addEventListener('click', function () {
        document.getElementById('principal').style.display = 'none';
        document.getElementById('formPersona').style.display = 'none';

        document.getElementById('formActivo').style.display = 'block';
    });
});
