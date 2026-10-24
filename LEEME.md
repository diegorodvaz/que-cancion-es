# ¿Qué canción es? — Juego de folklore

Para jugar: abrí `index.html` con doble clic. No hace falta instalar nada.

Las canciones de la lista suenan con las **muestras de 30 segundos de iTunes**, así que
**hace falta internet** mientras se juega. Si preferís usar tus propios mp3, también se puede
(y esos andan sin internet).

## Cómo agregar una canción

Abrí `canciones.js` con el Bloc de notas y agregá una línea nueva dentro de la lista, igual a las otras.
Poné `pais: "uy"` o `pais: "ar"` para que aparezca al elegir Uruguayas o Argentinas.
Hay dos formas:

### Con la muestra de iTunes (lo más fácil)

1. Buscá la canción en [music.apple.com](https://music.apple.com) (no hace falta cuenta).
2. En la canción tocá los tres puntitos **⋯ → Compartir → Copiar enlace**.
3. Pegá ese enlace en `itunes`:

   ```js
   { pais: "ar", titulo: "Paisaje de Catamarca", interprete: "Los Chalchaleros", itunes: "https://music.apple.com/ar/album/...?i=1234567890", archivo: "", inicio: 0 },
   ```

   El enlace tiene que terminar en `?i=` y un número (ese número es la canción). También podés poner solo el número.

   La muestra dura 30 segundos. Con `inicio: 0` arranca cada vez en un segundo al azar entre el 0 y el 10,
   para que no empiece siempre con la frase más conocida. Si una canción arranca justo cantando el título,
   escuchala y poné el segundo que prefieras (hasta 10), por ejemplo `inicio: 9`.

### Con un mp3 propio

1. Copiá el mp3 dentro de la carpeta `canciones/`, con un nombre simple, sin espacios ni acentos.
2. Poné ese nombre en `archivo` (si hay `archivo`, se usa el mp3 y se ignora `itunes`):

   ```js
   { pais: "ar", titulo: "Paisaje de Catamarca", interprete: "Los Chalchaleros", itunes: "", archivo: "paisaje-de-catamarca.mp3", inicio: 42 },
   ```

   `inicio` es el segundo donde arranca el fragmento: elegí una parte que se reconozca
   (el estribillo, el comienzo del canto). Para 1:30 poné `90`.

Guardá y recargá la página.

## Si algo no anda

- **"No hay conexión a internet"**: las muestras de iTunes necesitan internet.
- **"Esta canción no se puede escuchar"**: con mp3, el nombre en `archivo` no coincide con el de la carpeta
  (fijate mayúsculas, acentos y que termine en `.mp3`). Con iTunes, puede ser la conexión.
- **Una canción de iTunes no aparece en el juego**: ese número no existe en la tienda argentina.
  Probá con otra versión de la canción.
- **"No se pudo leer la lista"**: a alguna línea de `canciones.js` le falta una coma, una comilla o una llave.
- Hacen falta por lo menos 4 canciones distintas para poder jugar.

Para sacar una canción sin borrarla, poné `//` al principio de su línea.

## Publicarlo en internet (GitHub Pages)

Así las abuelas lo abren con un link desde el celular, sin pasar archivos.

1. En [github.com](https://github.com) creá un repositorio nuevo **público** (por ejemplo `que-cancion-es`).
2. Tocá **"uploading an existing file"** y arrastrá `index.html`, `canciones.js` y `LEEME.md`.
3. En **Settings → Pages**, elegí la rama `main` y la carpeta `/ (root)`, y guardá.
4. En un par de minutos queda en `https://TU-USUARIO.github.io/que-cancion-es/`.

Para cambiar la lista después, editá `canciones.js` en GitHub (el lápiz ✏️) y guardá: en un minuto se actualiza.

- **No subas mp3 propios** a un repositorio público: eso sería publicar música con derechos.
  Publicado, el juego usa solo las muestras de iTunes.
- Las muestras son de Apple, pensadas para escuchar antes de comprar. Por eso cada resultado tiene
  el enlace "Escuchala completa en Apple Music": no lo saques.
- Una vez publicado, el texto de "Copiar mis puntos" incluye el link al juego.
