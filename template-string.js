let nombreConcatenado = 'Josue Jair';
let nombreTemplaete = 'Caycho bardalez';

// console.log(nombreConcatenado + ' ' + nombreTemplaete);
// console.log(`${nombreConcatenado} ${nombreTemplaete}`);

function getNombre() {
    return `${nombreConcatenado} ${nombreTemplaete}`;
}
console.log('Mi nombre es :' + getNombre());
console.log(`Mi nombre es ${getNombre()}`);