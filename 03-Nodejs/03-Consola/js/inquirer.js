const inquirer = require('inquirer');
const colors = require ('colors');
const { validate } = require('uuid');

const menu = [
    {   
        type: 'list',
        name: 'menuOpt',
        message: 'Seleccione una opción: ',
        choices: [
            {
                value: 1,
                name: `1. Crear Tarea`
            },
            {
                value: 2,
                name: `2. Listar Tareas`
            },
            {
                value: 3,
                name: `3. Listar Tareas Terminadas`
            },
            {
                value: 4,
                name: `4. Listar Tareas Pendientes`
            },
            {
                value: 5,
                name: `5. Completar Tarea.`
            },
            {
                value: 6,
                name: `6. Borrar Tarea`
            },
            {
                value: 0,
                name: `0. Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {
        //console.clear();
        console.log("======================".green);
        console.log(" Seleccione una opción".green);
        console.log("======================".green);
        console.log("");

        const { menuOpt } = await inquirer.prompt(menu); 
        return menuOpt;
};

const pausa = async () => {
    await inquirer.prompt([{
        type: 'input',
        name: 'pauseOpt',
        message: `Presione ${'Enter'.red} para continuar...`
    }]);
};

const capturaEntrada = async (message) =>{
    respuesta = await inquirer.prompt([{
        type: 'input',
        name: 'resp',
        message,
        validate: (entrada) => {
            if (entrada.length === 0) {
                return 'Entrada inválida. Reintente'
            } else {
                return true;
            }
        }
    }]);
    return respuesta.resp;
};

module.exports = {
    inquirerMenu,
    pausa,
    capturaEntrada
};