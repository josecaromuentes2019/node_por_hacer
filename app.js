const argv = require('./config/yargs').argv;
const porHacer = require('./por_hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':

        let desc = porHacer.crear(argv.descripcion);
        console.log(desc);
        break;
    case 'listar':
        console.log('listar todos los usuarios');
        let listado = porHacer.listar();
        for (let dato of listado) {
            console.log('====Por hacer===='.green);
            console.log(dato.descripcion);
            console.log(`Estado: ${dato.completado}`);
            console.log('================='.blue);
        }
        break;
    case 'actualizar':

        porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('actualizar un usuario');
        break;
    case 'borrar':
        let resultado = porHacer.borrar(argv.descripcion)
        console.log(resultado);
        break;
    default:
        console.log('El comando no es reconocido');
}