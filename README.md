[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/GSlXBViu)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11582697&assignment_repo_type=AssignmentRepo)
# Ejercicios 3 - Node.js

Versión de Node.js requerida: 18.17.0 LTS

**¿Necesitas repasar?**

- Repositorio con código de ejemplo: https://github.com/midudev/curso-node-js

## Ejercicios

Vamos a crear nuestra propia utilidad `dotenv` en el archivo `dotenv.js`.

- La utilidad debe devolver un método `config` que lee el archivo `.env` y añade las variables de entorno que haya en el archivo al objeto `process.env`.

- Por ejemplo si tu archivo `.env` contiene:

```sh
PORT=8080
TOKEN="123abc"
```

Entonces al hacer esto:

```javascript
const dotenv = require("./dotenv.js");
dotenv.config()

console.log(process.env.PORT) // 8008
console.log(process.env.TOKEN) // "123abc"
```

También se le puede pasar el path del archivo `.env` como parámetro:

```javascript
const dotenv = require("./dotenv.js");
dotenv.config("./config/.env.local")
```

Cosas a tener en cuenta:

- No debe importar ninguna dependencia de Node.js, sólo usar el módulo `fs` para leer el archivo.
- Si el archivo no existe, no debe dar error, simplemente no hace nada.
- Si el archivo existe, pero no tiene ninguna variable de entorno, no debe hacer nada.
- Sólo debe soportar el archivo `.env` o el que se le pasa como parametro, no hace falta que soporte `.env.local`, `.env.development` y similares de forma automática.
- Ten en cuenta que las variables de entorno siempre son strings, por lo que si en el archivo `.env` hay un número, por ejemplo `PORT=8080`, al leerlo con `fs` y añadirlo a `process.env` debe ser un string, no un número.
- `process.env` es un objeto y, por lo tanto, es mutable. Esto significa que podemos añadir propiedades nuevas sin problemas. Por ejemplo:

```javascript
process.env.WHATEVER = 'ohyeah'
```

- Aunque muchas veces recomendamos usar métodos asíncronos para leer ficheros, en este caso seguramente no sea la opción. ¿Te imaginas por qué?