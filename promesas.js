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

let getEmpleadoById = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`EL empleado con el id : ${id} no existe`);
        } else {
            resolve(empleadoDB);
        }
    })
}

let getSalarioEmpleado = (empleado) => {
    return new Promise((resolve, reject) => {
        let idDB = salario.find(salarios => salarios.id === empleado.id);
        emp = {
            nombre: empleado.nombre,
            salarios: idDB.monto
        }
        if (!idDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            resolve(emp);
        }
    });

}

getEmpleadoById(3).then(empleado => {
    getSalarioEmpleado(empleado).then(resp => {
        console.log(`El nombre del empleado es ${resp.nombre} y su salario es de ${resp.salarios} $`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
});