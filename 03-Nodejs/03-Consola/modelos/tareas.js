const Tarea = require("./tarea");
const colors = require('colors');

class Tareas {

    constructor() {
        this.listado = {};
    }

    crearTarea = (desc) => {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    };

    get listadoArr() {
        const listadoArr = [];
        Object.keys(this.listado).forEach( (key) => {
            const tarea = this.listado[key];
            listadoArr.push(tarea);
        });
        return listadoArr;
    }

    cargarListado = (arreglo) => {
        arreglo.forEach( (tarea) => {
            this.listado[tarea.id] = tarea;
        });
    }

    imprimeTareas = () => {
        let salida = '';
        let cont = 1;
        this.listadoArr.forEach( (tarea) => {
            salida = `${cont.toString().green + ".".green} ${tarea.descripción.grey} :: `;
            if (tarea.completado) {
                salida += `${'Completado'.green}`;
            } else {
                salida += `${'Pendiente'.red}`;
            } 
            console.log(salida);
            cont++;
        });
    };

    imprimirPendientesCompletadas = (tipo) => {
        let salida = '';
        let cont = 1;
        if (tipo) {
            this.listadoArr.forEach( (tarea) => {
                if (tarea.completado !== null) {
                    salida = `${cont.toString().green + ".".green} ${tarea.descripción.grey} :: ${'Completado'.green}\n`;
                }
                cont++;
                
            } );
            console.log(salida);
        } else {
            this.listadoArr.forEach( (tarea) => {
                if (tarea.completado !== null) {
                    salida = `${cont.toString().green + ".".green} ${tarea.descripción.grey} :: ${'Pendiente'.red}\n`;
                }
                cont++;
                
            } );
            console.log(salida);
        }
    };

}

module.exports = Tareas;