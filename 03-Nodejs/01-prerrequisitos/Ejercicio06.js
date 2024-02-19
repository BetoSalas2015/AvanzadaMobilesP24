// callbacks 2
let getUsuarioByID = (id, callback) => {
    let usuario = {
        nombre: 'Roberto',
        id
    };
    if (id === 20) {
        console.log(`El usuario con id ${id} no exisxte en la base de datos`);
    } else {
        callback(null, usuario);
    }
};

getUsuarioByID(2, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Usuario en base de datos: `, usuario);
    }
})