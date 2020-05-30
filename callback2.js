let empleados = [{
        id: 1,
        nombre: 'Josue'
    },
    {
        id: 2,
        nombre: 'Raquel'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];


let salario = [{
        id: 1,
        monto: 3000
    },

    {
        id: 2,
        monto: 2500
    }
];

let getEmpleadoById = (id, callback) => {


    let empleadoDB = empleados.find(empleado => empleado.id === id)


    if (!empleadoDB) {
        callback(`EL empleado con el id : ${id} no existe`);
    }
    // if (!Number.isInteger(empleadoDB)) {
    //     callback(`EL id solo acepta numeros`);
    // } else {
    callback(null, empleadoDB)
}


/*---------------------------------------------------------------------*/
/* Obtener un salario  con parametro de empleado y callback*/

let getSalarioEmpleado = (empleado, callback) => {

    let idDB = salario.find(salarios => salarios.id === empleado.id);

    emp = {
        nombre: empleado.nombre,
        salarios: idDB.monto
    }

    if (!idDB) {
        console.log(`El empleado con el id : ${empleado.nombre} no existe`);
    } else {
        callback(null, emp)
    }
}

getEmpleadoById(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    } else {
        getSalarioEmpleado(empleado, (err, response) => {
            if (err) {
                return console.log(err);
            }
            console.log(`El empleado ${response.nombre} tiene un salario de ${response.salarios} $`);
        })
    }

});