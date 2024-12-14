# React Zairtre Pokedex

Este proyecto es una Pokedex desarrollada con React, que permite a los usuarios buscar y visualizar información sobre diferentes Pokémon. La aplicación utiliza la API de PokeAPI para obtener los datos de los Pokémon y presenta una interfaz amigable y fácil de usar.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Biblioteca para manejar la navegación en la aplicación.
- **Axios**: Cliente HTTP para realizar solicitudes a la API de PokeAPI.
- **React Bootstrap**: Biblioteca de componentes de Bootstrap para React.
- **PokeAPI**: API pública para obtener datos de Pokémon.
- **CSS**: Para el diseño y la presentación de la aplicación.

## Hito Alcanzado

### Antes de la Actualización

- **React 17.2**: La aplicación estaba construida utilizando React 17.2.
- **Dependencias Antiguas**: Varias bibliotecas y dependencias estaban desactualizadas.
- **Funcionalidad de Búsqueda**: La funcionalidad de búsqueda estaba integrada en el mismo componente que la lista completa de Pokémon, lo que causaba conflictos y problemas de rendimiento.

### Después de la Actualización

- **React 19.0**: La aplicación ha sido actualizada a React 19.0, lo que mejora el rendimiento y la compatibilidad con las últimas características de React.
- **Dependencias Actualizadas**: Todas las bibliotecas y dependencias han sido actualizadas a sus versiones más recientes.
- **Separación de Lógica**: La funcionalidad de búsqueda ha sido separada en un componente independiente (`PokeSearch.js`), lo que mejora la organización del código y el rendimiento de la aplicación.
- **Mejoras en la Interfaz**: Se han realizado mejoras en la interfaz de usuario para una mejor experiencia de usuario.

## Instalación y Uso

### Requisitos Previos

- Node.js y npm instalados en tu máquina.

### Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/react-pokedex.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd react-pokedex
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

### Uso

1. Inicia la aplicación:
    ```bash
    npm start
    ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

### Estructura del Proyecto

- **[components](http://_vscodecontentref_/1)**: Contiene todos los componentes de React utilizados en la aplicación.
  - **`Pokedex.js`**: Componente principal que muestra la lista completa de Pokémon.
  - **`PokeBox.js`**: Componente que maneja la lista completa de Pokémon.
  - **`PokeSearch.js`**: Componente que maneja la funcionalidad de búsqueda.
  - **`Slider.js`**: Componente para mostrar el slider en la parte superior de la página.
  - **`Sidebar.js`**: Componente para mostrar la barra lateral con opciones de búsqueda.
  - **`Pokemon.js`**: Componente para mostrar la información de un Pokémon individual.
  - **`Loader.js`**: Componente para mostrar un indicador de carga mientras se obtienen los datos.
- **[assets](http://_vscodecontentref_/2)**: Contiene las imágenes y otros recursos estáticos utilizados en la aplicación.
- **`src/App.css`**: Contiene los estilos CSS para la aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
Desarrollador:
**LuisEnGuerrero.Dev**



---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
