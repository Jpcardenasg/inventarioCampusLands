// SIDE MENU: Despliega u oculta el menú lateral
const hamBurger = document.querySelector( ".toggle-btn" );

hamBurger.addEventListener( "click", function () {
    document.querySelector( "#sidebar" ).classList.toggle( "expand" );
} );

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('crearPersona').addEventListener('click', function () {
        document.getElementById('principal').style.display = 'none';
        document.getElementById('formActivo').style.display = 'none';
        document.getElementById('formCategoria').style.display = 'none';
        document.getElementById('formMarca').style.display = 'none';


        document.getElementById('formPersona').style.display = 'block';
    });

    document.getElementById('crearActivo').addEventListener('click', function () {
        document.getElementById('principal').style.display = 'none';
        document.getElementById('formPersona').style.display = 'none';
        document.getElementById('formCategoria').style.display = 'none';
        document.getElementById('formMarca').style.display = 'none';



        document.getElementById('formActivo').style.display = 'block';
    });

    document.getElementById('crearCategoria').addEventListener('click', function () {
        document.getElementById('principal').style.display = 'none';
        document.getElementById('formPersona').style.display = 'none';
        document.getElementById('formActivo').style.display = 'none';
        document.getElementById('formMarca').style.display = 'none';

        const formNameElement = document.querySelector('form-name');
        if (formNameElement) {
            formNameElement.setTitle("Crear Categoria");
            formNameElement.setLabel("Nombre de categoria");
            formNameElement.setPlaceholder("Ingrese el nombre de la categoría");
        }

        document.getElementById('formCategoria').style.display = 'block';
    });

    document.getElementById('crearMarca').addEventListener('click', function () {
        document.getElementById('principal').style.display = 'none';
        document.getElementById('formPersona').style.display = 'none';
        document.getElementById('formActivo').style.display = 'none';
        document.getElementById('formCategoria').style.display = 'none';

        const formNameElement = document.querySelector('form-name');
        if (formNameElement) {
            formNameElement.setTitle("Crear Marca");
            formNameElement.setLabel("Nombre de marca");
            formNameElement.setPlaceholder("Ingrese el nombre de la marca");
        }

        document.getElementById('formMarca').style.display = 'block';
    });

});
