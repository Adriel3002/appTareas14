const fs = require('fs');

const tareas = require('./tareas.json');

module.exports = {
    agregarTarea : (tarea) => {

        tareas.push(tarea);
        fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,3))

        return console.log('Tarea agregada!')
    },
    actualizarTarea : (id) => {
        return 'Actualizando tarea'
    },
    eliminarTarea : (id) => {
        return 'Eliminando tarea'
    }
}