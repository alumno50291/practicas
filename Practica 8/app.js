document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const input = document.getElementById('input');
    const listaTareas = document.getElementById('lista-tareas');
    const template = document.getElementById('temp');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        //Obtengo del dom el contenido del input y le quito los espacios
        const tarea = input.value.trim();

        //Compruebo que no este vacio, en caso de estarlo 
        //no se hace nada
        if (tarea === '') {
            return;
        }

        //Copio la plantilla del html y añado el contenido del input
        //en el parrafo
        const plantilla = document.importNode(template.content, true);
        const parrafo = plantilla.querySelector('p');
        parrafo.textContent = tarea;

        //Añado la plantilla con la tarea ya añadida a la lista de tareas
        listaTareas.appendChild(plantilla);

        //Vacio el contenido del input
        input.value = '';
    });
    
    listaTareas.addEventListener("click", e => {
        if (e.target.classList.contains("fa-check-circle")) {
            const div_tarea = e.target.closest(".alert");
            div_tarea.classList.remove("alert-warning");
            div_tarea.classList.add("alert-success");
        }
        if (e.target.classList.contains("fa-times-circle")) {
            const div_tarea = e.target.closest(".alert");
            div_tarea.classList.remove("alert-warning");
            div_tarea.classList.add("alert-danger");
        }
    });
});