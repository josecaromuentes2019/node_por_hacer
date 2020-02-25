const fs = require('fs');

let listadoPorHacer = [];

const guardarBd = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, err => {
        if (err) throw console.log(err)
    });
}

const listar = () => {
    info = require('../db/data.json');
    return info;
}

const cargar = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargar();

    if (listadoPorHacer.length > 0) {
        let index = listadoPorHacer.findIndex(valor => valor.descripcion === descripcion);
        if (index >= 0) {
            return 'Ya existe la descripcion';
        }

    }
    porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarBd();
    return porHacer;
}

const actualizar = (descripcion, completado) => {
    cargar();
    let index = listadoPorHacer.findIndex(valor => valor.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBd();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargar();
    let indice = listadoPorHacer.findIndex(valor => valor.descripcion === descripcion);
    listadoPorHacer.splice(indice, 1);
    if (indice >= 0) {
        guardarBd();
        return 'Elemento Eliminado'
    } else {
        return 'No se enontro el elemento'
    }

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}