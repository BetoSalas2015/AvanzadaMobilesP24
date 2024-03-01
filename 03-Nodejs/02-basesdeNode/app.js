const { crearArchivo } = require('./modulos/multiplicar');

console.clear();

let base = 3;

crearArchivo(base)
            .then( (nombreArchivo) => { console.log(nombreArchivo, " creado");})
            .catch((err) => {console.log(err); });