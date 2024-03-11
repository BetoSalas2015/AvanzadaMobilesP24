const { crearArchivo } = require('./modulos/multiplicar');
const argv = require('yargs')
        .option('b',{
            alias: 'base',
            demandOption: true,
            default: 5,
            describe: 'Base de la tabla de Multiplicar', 
            type: 'number'
        })
        .option()
        .check( (argv, option) => {
            if (isNaN(argv.base)) {
                throw 'El argumento base no es un número'
            }
            return true;
        })
        .argv;

console.clear();
const base = argv.base;

 
console.log(base);

crearArchivo(base)
            .then( (nombreArchivo) => { console.log(nombreArchivo, " creado");})
            .catch((err) => {console.log(err); }); 