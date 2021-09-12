# First Class (Primera Clase)
In this class, we'll install and use all the necessary technologies for running our first Node server, thinking in a scalable project.

>En esta clase, instalaremos y usaremos todas las tecnologías necesarias para correr nuestro primer servidor node, pensando en un proyecto escalable.

## Installing the tecnologies (Instalando las tecnologías)
In this first moment we'll only use:
>En este primer momento solo usaremos:
- [Git](https://git-scm.com/downloads)
- [VSCode](https://code.visualstudio.com/download)
- [Node + NPM](https://nodejs.org/es/download/)

The before list contains the link to the download pages.
>La lista anterior contiene los link a las paginas de descarga.

## Starting to work (Empezando a trabajar)
We must create our working directory, open it in the VSCode and in a terminal (We recommend the terminal integrated in VSCode).

>Debemos crear nuestro directorio de trabajo abrirlo en el VSCode y en una terminal (Recomendamos la integrada en VSCode).

When we have open our directory, in the terminal type `git init` and `git branch -M main` [*](https://github.com/github/renaming).
> Cuando tengamos abierto nuestro directorio, en la terminal escribir `git init` y luego `git branch -M main` [*](https://github.com/github/renaming).

Now type `npm init` and hit enter always, you should see created a new file called **package.json**.
> Ahora escribimos `npm init` y presionamos enter siempre, luego deberías ver creado un nuevo archivo llamado **package.json**.

Let's make our first commit in git, type `npm add .` and then `npm commit -m'first commit'`, congratulations, we started a project.
> Hagamos nuestro primer commit en git, escribí `npm add .` y luego `npm commit -m'first commit'`, felicitaciones, arrancamos un proyecto.

## Our first Node serve (Nuestro primer servidor Node)
Inside our root directory add a file called **index.js**, inside the file type:
> Dentro de nuestro directorio principal agregar un archivo llamado **index.js**, dentro del archivo escribir:

```js
const http = require('http');

http.createServer().listen(3000, () => {
    console.log(`Server running in http://localhost:3000`);
});
```
Run the server by typing `node index.js` and your console should say `Server running at http://localhost: 3000`, you can stop it by typing `ctrl + c`.

> Ejecute su servidor escribiendo `node index.js`y si revisa la consola debería decir `Server running at http://localhost: 3000`, puede detenerla tipeando `ctrl + c`.

We can do other commit `git commit -m'basic server'`
>Podemos hacer otro commit `git commit -m'basic server'`
---
Now let's improve the code and send a message when we visit the URL from the browser: 

>Ahora mejoremos el código y envíemos un mensaje cuando visitemos la url desde el navegador:

```js
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running in http://${hostname}:${port}/`);
});
```
Check by typing `node index.js`, and go in the browser to the url `localhost:3000`, you should see `Hello World`. Finally do it other commit `git commit -m'better server`.
>Chequeamos tipeando `node index.js` y yendo en el navegador a la url `localhost:3000`. Finalmente hagamos otro commit `git commit -m'better server`.