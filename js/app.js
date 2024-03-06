import { fetchData } from "../Api/fetch-api.js";


const INVENTORY_URL = '/data/invetoryCampusLands.json';

const invetoryData = await fetchData( INVENTORY_URL );


class Item {
    constructor ( data ) {
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



class Inventory {
    constructor ( data ) {
        this.items = data.map( itemData => new Item( itemData ) );
    }

    addItem( itemData ) {
        const newItem = new Item( itemData );
        this.items.push( newItem );
    }

    showInventory() {
        this.items.forEach( item => {
            console.log( item );
        } );
    }
}
console.log( "asdsadsa" );