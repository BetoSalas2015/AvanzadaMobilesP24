const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada } = require('./js/inquirer'); 
const Tareas = require('./modelos/tareas');
const Tarea = require('./modelos/tarea');

const main = async () => { 
    let opc = '';
    tareas = new Tareas();
        do {
        opc = await inquirerMenu();
        switch (opc) {
            case 1: const resp = await capturaEntrada('Descripción: ');
                    console.log(resp);
                    tareas.crearTarea(resp); 
                    break;
            case 2: console.log( tareas.listado);  break;
        
            default:
                break;
        }

    } while (opc != 0);

    await pausa();
};

main();