# Documentación del Proyecto BPSR-Gear-Planner-S3

Este documento tiene como objetivo proporcionar una guía sencilla para editar las páginas y archivos de este proyecto. El proyecto está estructurado con archivos HTML, CSS y JavaScript.

## Estructura de Archivos

- `index.html`: Es el archivo principal de la aplicación. Contiene la estructura HTML de la página.
- `css/styles.css`: Contiene los estilos CSS personalizados para la aplicación.
- `js/app.js`: Archivo JavaScript principal que maneja la lógica de la aplicación.
- `js/data.js`: Contiene los datos utilizados por la aplicación (por ejemplo, información de equipo, habilidades, etc.).
- `js/i18n.js`: Maneja la internacionalización (traducciones) de la aplicación.
- `js/tailwind-config.js`: Configuración de Tailwind CSS.
- `source/`: Directorio que contiene archivos de datos adicionales para diferentes categorías como DG, gear y sigil.


### . Edición de la Lógica de la Aplicación (`js/app.js`)

Cualquier cambio en la interactividad de la página, cómo se muestran los datos o cómo responde la aplicación a las acciones del usuario, se debe realizar en `js/app.js`.


### . Edición de Datos (`js/data.js` y `source/`)

Los datos que la aplicación utiliza, como las estadísticas de los ítems o la información de las habilidades, se encuentran en `js/data.js` o en los archivos dentro del directorio `source/`.


### . Edición de Traducciones (`js/i18n.js`)

Si necesitas agregar nuevos idiomas o modificar las traducciones existentes, edita el archivo `js/i18n.js`.
