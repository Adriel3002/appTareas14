const {agregarTarea,actualizarTarea,eliminarTarea} = require('./tareas');

let nuevaTarea = {
    id : 1,
    descripcion : 'Aprender JS',
    estado : 'en proceso'
}

agregarTarea(nuevaTarea)
console.log();