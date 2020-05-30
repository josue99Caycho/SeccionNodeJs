let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `Nombre : ${this.nombre} - Apellido : ${this.apellido} - poder : ${this.poder}`
    }
}

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: nombreDeadPool, apellido, poder } = deadpool;

console.log(nombreDeadPool, apellido, poder);