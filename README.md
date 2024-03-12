# Proyecto CampusLands - Sistema de Gestión de Inventario

## Descripción del proyecto

Este proyecto se centra en la creación de un sistema de gestión de activos diseñado para supervisar todos los elementos alojados en la sede principal de CAMPUSLANDS en Bucaramanga. Este sistema facilitará el manejo de la ubicación, asignación, estado y movimientos de los activos pertenecientes a la organización.

## Entidades

El sistema manejará las siguientes entidades:

- **Activos**: Representan los elementos físicos ubicados en las instalaciones de CAMPUSLANDS.
- **Categoría de Activo**: Categorías a las que pertenecen los activos.
- **Proveedor**: Entidades que proveen los activos.
- **Tipo de Activo**: Tipos específicos de activos.
- **Marcas**: Marcas de los activos.
- **Personas**: Personal de la organización.
- **Tipo de Persona**: Tipos de roles que puede tener una persona en la organización.
- **Tipo de Movimiento de Activo**: Tipos de movimientos que puede tener un activo.
- **Asignación**: Registro de asignaciones de activos a personas.
- **Detalle de Movimiento**: Detalles de los movimientos realizados sobre un activo.
- **Historial de Activo**: Historial de movimientos de un activo.

## Requerimientos de diseño

### Área de Menú

- Logo de CampusLands.
- Opciones de Menú: Activos, Marcas, Personas, Estado, Tipo de Persona, Tipo de Movimiento de Activo, Tipo de Activo.

### Área de Contenido

#### Agregar

- Caja de texto para introducir información.
- Botón de ejecución.

#### Editar

- Campos para editar información de un activo (ID, nombre, estado).
- Caja de texto para introducir información de búsqueda.
- Botón de ejecución de búsqueda.

#### Eliminar

- Campos para eliminar un activo (ID, nombre, estado).
- Caja de texto para introducir información de búsqueda.
- Botón de ejecución de búsqueda.
- Botón de ejecución de eliminación (solo disponibles si el activo está dado de baja).

#### Buscar

- Campo de búsqueda para encontrar un activo por su ID, nombre o estado.
- Botón de ejecución de búsqueda.
- Botón para ver detalles del activo seleccionado.

#### Asignación

- Crear Asignación: Asignar activos a personas.
- Retornar Activo: Registrar el retorno de un activo asignado.

## README

### Instrucciones de instalación

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

### Uso del sistema

1. Selecciona una opción del menú para comenzar.
2. Agrega, edita, elimina o busca activos según tus necesidades.
3. Realiza asignaciones de activos a personas y registra su retorno cuando sea necesario.

### Firebase y Clases Utilizadas

El sistema utiliza Firebase como backend para el almacenamiento de datos. Se emplean las siguientes clases para manejar la interacción con Firebase:

#### Clases Utilizadas

**`CRUDColeccionesFirebase`**

- Clase base para operaciones CRUD en Firebase.
- Métodos:
  - `post(data)`: Para crear datos en Firebase.
  - `get()`: Para obtener datos de Firebase.
  - `update(docId, newData)`: Para actualizar datos en Firebase.
  - `delete(docId)`: Para eliminar datos en Firebase.

**Clases Especializadas**

- **Activo**: Para manejar los activos.
- **ManejoInventario**: Para gestionar el inventario.
- **Persona**: Para gestionar la información del personal.
- **Asignacion**: Para manejar las asignaciones de activos.
- **ColeccionesSimples**: Para manejar colecciones simples.

#### Firebase Configuración

El archivo `firebaseConfig.js` contiene la configuración de Firebase y las funciones para interactuar con la base de datos.
