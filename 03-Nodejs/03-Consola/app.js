const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada } = require('./js/inquirer'); 
const Tareas = require('./modelos/tareas');
const Tarea = require('./modelos/tarea');
const { guardaBase, cargaBase } = require('./js/guardabase');

const main = async () => { 
    let opc = '';
    tareas = new Tareas();
        do {
        opc = await inquirerMenu();
        const tareasdb = await cargaBase();
        if (tareasdb) {
            await tareas.cargarListado(tareasdb);
        }

        switch (opc) {
            case 1: const resp = await capturaEntrada('Descripción: ');
                    console.log(resp);
                    tareas.crearTarea(resp); 
                    break;
            case 2: tareas.imprimeTareas(); break;
            case 3: tareas.imprimirPendientesCompletadas(true); break;
            case 4: tareas.imprimirPendientesCompletadas(false); break;
        
            default:
                break;
        }
        guardaBase(tareas.listadoArr);

        if (opc !== 0) {
            await pausa();
        }
    } while (opc != 0);
 
};

main();