// Para que funcione el despliegue en GitHub Pages es necesario hacer esta configuración.
// En caso contrario no encuentra la ruta del js ni del css.
// Esto es porque el despliegue se produce en la ruta:
// https://josemanuelmunozmanzano.github.io/js-vite-blackjack/
// Pero si abrímos con F12 las opciones de desarrollador y vamos a la pestaña Network y recargamos la página,
// pulsamos en el archivo .js y veremos que la request se hace a la url:
// https://josemanuelmunozmanzano.github.io/assets/index-5d74b13d.js
// Es decir, falta la parte del proyecto GitHub siguiente: js-vite-blackjack
import { defineConfig } from 'vite';

// defineConfig es una función que espera un objeto en el que podemos indicar muchas opciones.
// Nos interesa cambiar la base del directorio para arreglar nuestro problema.
// Indicar que hace falta poner los slash al inicio y al final para evitar warnings.
//
// Indicar que se podrían generar variables de entorno y en función de ellas se puede desplegar la app
// de una u otra forma.
//
// Una vez hecha esta configuración hay que ejecutar de nuevo el build: npm run build
// Y cambiar el nombre de la carpeta dist a docs.
export default defineConfig({
  base: '/js-vite-blackjack/',
  plugins: [],
});
