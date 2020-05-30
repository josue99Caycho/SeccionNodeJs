let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Joshe',
        id
    }
    if (id === 20) {
        console.log('EL usuario de la base de datos con el id ' + id + ' no existe');
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});