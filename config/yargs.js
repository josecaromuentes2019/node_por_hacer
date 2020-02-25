let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('borrar', 'Borra un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'descripcion de la tarea terminada'
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}