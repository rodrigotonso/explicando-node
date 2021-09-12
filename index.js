const http = require('http');

http.createServer().listen(3000, () => {
    console.log(`El servidor se está ejecutando en http://localhost:3000/`);
});