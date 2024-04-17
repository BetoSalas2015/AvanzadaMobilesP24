const colors = require('colors');
const { inquirerMenu, capturaEntrada, pausa, listadoCiudades } = require('./js/inquirer');
const Busqueda = require('./modelos/busquedas');

const main = async () => {
    let resp;
    const busqueda = new Busqueda();
    do {
        resp = await inquirerMenu();
        switch (resp) {
            case 1: const lugar = await capturaEntrada("Ciudad: ");
                    const lugares = await busqueda.ciudad(lugar); 
                    const id = await  listadoCiudades(lugares);
                    if (!id) {
                        break
                    }
                    const lugarSeleccionado = lugares.find( ciudad => ciudad.id === id); 
                    // Impresión del lugar seleccionado:
                    console.log(`\n${'Ciudad: '.yellow}: ${lugarSeleccionado.lugar} `);
                    console.log(`${'Latitud: '.yellow}: ${lugarSeleccionado.lat} `);
                    console.log(`${'Longitud: '.yellow}: ${lugarSeleccionado.lon} `);
                    await pausa();
                    break;
            case 2: break;
        }
        if (resp === 0) {
            await pausa();
        }
    } while (resp !== 0);
};

main();