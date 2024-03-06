import { fetchData } from "../Api/fetch-api.js";
import { getData, postData } from "../Api/firebaseConfig.js";


const INVENTORY_URL = '/data/invetoryCampusLands.json';

const inventoryData = await fetchData( INVENTORY_URL );

// Clase base para POST y GET de los datos en firebase
class CRUDColeccionesFirebase {
    constructor ( coleccion ) {
        this.coleccion = coleccion;
    }

    // Método para crear datos en firebase, mediante postData
    async post( data ) {
        try {
            await postData( this.coleccion, data );
            console.log( 'Datos enviados a Firebase correctamente.' );
        } catch ( error ) {
            console.error( "Error al enviar datos a Firebase:", error );
            throw error;
        }
    }
    // Método para obtener datos de firebase, mediante getData
    async get() {
        try {
            const data = await getData( this.coleccion );
            console.log( 'Datos obtenidos de Firebase correctamente.' );
            return data;
        } catch ( error ) {
            console.error( "Error al obtener datos de Firebase:", error );
            throw error;
        }
    }
}


class Activo extends CRUDColeccionesFirebase {
    constructor ( data ) {
        super( 'activos' );
        this.item = data.item;
        this.transaccion = data.codigoTransaccion;
        this.formulario = data.formulario;
        this.empresa = data.empresa;
        this.fechaCompra = data.fechaCompra;
        this.nit = data.nit;
        this.proveedor = data.proveedor;
        this.descripcionItem = data.descripcionItem;
        this.serial = data.serial;
        this.categoria = data.categoria;
        this.cantidad = data.cantidad;
        this.ubicacion = data.ubicacion;
    }
}
// inventoryData.forEach( async ( itemData ) => {
//     try {
//         const activo = new Activo( itemData );
//         await activo.post( itemData );
//     } catch ( error ) {
//         console.error( 'Error al guardar el activo en Firebase:', error );
//     }
// } );


class ManejoInventario extends CRUDColeccionesFirebase {
    constructor ( coleccion ) {
        super( coleccion );
    }

    async mostrarInventario() {
        try {
            const items = await this.get();
            items.forEach( item => {
                console.log( item );
            } );
        } catch ( error ) {
            console.error( 'Error al obtener el inventario para mostrar:', error );
        }
    }
}
// const categorias = new ManejoInventario( 'categorias' );
// categorias.mostrarInventario();


class Persona extends CRUDColeccionesFirebase {
    constructor ( data ) {
        super( 'personas' );
        this.id = data.id;
        this.nombre = data.nombre;
        this.email = data.email;
        this.tipo = data.tipo;
    }

}

class Asignacion extends CRUDColeccionesFirebase {
    constructor ( data ) {
        super( 'asignaciones' );
        this.fecha = data.fecha;
        this.idPersona = data.idPersona;
    }
}
// let data = {
//     "fecha": "12/29/1997",
//     "idPersona": "1098803029"
// };

// const nuevaAsign = new Asignacion( data );
// nuevaAsign.post( data );


// Clase para manejar las colecciones que solo tienen la llave nombre
// Categorias, Marcas, Estados, Tipo Persona, Tipos de activos
// TODO: Cambiar nombre de la clase
class ColeccionesSimples extends CRUDColeccionesFirebase {
    constructor ( nombre, coleccion ) {
        super( coleccion );
        this.nombre = nombre;
    }
}


