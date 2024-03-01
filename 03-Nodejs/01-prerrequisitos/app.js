// Promises (Promesas)
const empleados = [
    {
        id: 1,
        nombre: "Roberto"
    },
    {
        id: 2,
        nombre: "Jorge"
    },
    {
        id: 3,
        nombre: "Pedro"
    },
    {
        id: 4,
        nombre: "Susana"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 2000
    }
];

const getEmpleado = (id) => { 
    return promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id )?.nombre;
        (empleado) ? resolve(empleado) : reject( `El empleado con id ${ id } no existe`);
        } 
    );
};

const getSalario = (id) => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        (salario) ? resolve(salario) : reject(`El salario para el id ${ id } no existe`);
        }
    );
};

let id = 5;
let emp;

const getInfoUsuario = async( id ) => {
    const empleado = await getEmpleado( id );
    const salario = await getSalario(id);
    return `El empleado ${empleado } tiene un salario de ${salario}. `;
};

getInfoUsuario(id)
    .then( empleado => console.log(empleado) )
    .catch( err => console.log(err) );

