window.addEventListener("load", function () {

    // Obtenermos los valores del html que necesitaremos
    const btnUsuarios = document.getElementById('btnUsuarios');
    const btnPosts = document.getElementById('btnPosts');
    const seccionUsuarios = document.getElementById('seccionUsuarios');
    const seccionPosts = document.getElementById('seccionPosts');
    const seccionDatosUsuario = document.getElementById('seccionDatosUsuario');

    //Eventos para los botones principales del html
    btnUsuarios.addEventListener('click', accedeUsers);
    btnPosts.addEventListener('click', obtenerTodosPosts);

    //Funcion para acceder a los datos de los usuarios usando fetch
    async function accedeUsers() {
        try {
            //Declaramos la url y se la pasamos a la funcion fetch
            const urlUsers = 'https://jsonplaceholder.typicode.com/users';
            const response = await fetch(urlUsers);
            //La respuesta del fetch se la pasamos a la funcion pintaUsuarios
            const listaUsers = await response.json();
            pintaUsuarios(listaUsers);
        } catch (error) {
            //En caso de error muestra un error por la consola
            console.error('Error al obtener datos del API:', error);
            throw error;
        }
    }

    //Funcion para acceder a los datos de un usuario mediante su id usando fetch
    async function accedeUser(id) {
        try {
            //Declaramos la url con el id correspondiente y se la pasamos a la funcion fetch
            const url = `https://jsonplaceholder.typicode.com/users/${id}`;
            const response = await fetch(url);
            //La respuesta del fetch la devolvemos con un return
            const usuario = await response.json();
            return usuario;
        } catch (error) {
            //En caso de error muestra un error por la consola
            console.error('Error al obtener datos del API:', error);
            throw error;
        }
    }

    //Funcion para obtener todos los posts
    async function obtenerTodosPosts() {
        try {
            //Declaramos la url y se la pasamos a la funcion fetch
            const url = "https://jsonplaceholder.typicode.com/posts";
            const response = await fetch(url);
            //La respuesta del fetch se la pasamos a la funcion pintaUsuarios
            const posts = await response.json();
            pintaPosts(posts);
        } catch (error) {
            //En caso de error muestra un error por la consola
            console.error('Error al obtener datos del API:', error);
            throw error;
        }
    }

    //Funcion para obtener los posts por id
    async function obtenerPosts(id) {
        //Declaramos la url con el id correspondiente y se la pasamos a la funcion fetch
        url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        try {
            const response = await fetch(url);
            //La respuesta del fetch se la pasamos a la funcion
            const posts = await response.json();
            pintaPosts(posts);
        } catch (error) {
            //En caso de error muestra un error por la consola
            console.error('Error al obtener datos del API:', error);
            throw error;
        }
    }

    //Funcion para pintar todos los usuarios
    async function pintaUsuarios(listaUsers) {
        try {
            //Obtenemos los datos de la funcion fetch
            const datosUsuarios = await listaUsers;

            //Elegimos donde iran los datos en el html
            const contenedorUsuarios = document.getElementById('tablaUsers');

            //Mostramos la seccion de la tabla de usuarios y ocultamos la de los posts
            seccionUsuarios.style.display = 'block';
            seccionPosts.style.display = 'none';
            seccionDatosUsuario.style.display = 'none';

            //Limpiamos la tabla en caso de que tenga contenido
            while (contenedorUsuarios.rows.length > 1) {
                contenedorUsuarios.deleteRow(1);
            }

            //Mostramos los datos en la tabla
            datosUsuarios.forEach(user => {
                //Creamos la fila donde iremos añadiendo los campos
                const fila = document.createElement('tr');

                /*Creamos los botones de mostrar usuario y posts 
                y le asignamos estilos*/
                const btnMostrarPosts = document.createElement("button");
                btnMostrarPosts.textContent = "Mostrar posts";
                btnMostrarPosts.classList.add("btn", "custom-btn");

                const btnMostrarUsuario = document.createElement("button");
                btnMostrarUsuario.textContent = user.username;
                btnMostrarUsuario.classList.add("btn", "custom-btn");

                //Creamos las celdas para los dos botones
                const tdMostrarPosts = document.createElement('td');
                const tdMostrarUsuario = document.createElement('td');
                tdMostrarUsuario.classList.add("border-0");

                //Creamos los eventos para los botones
                btnMostrarPosts.addEventListener("click", function () {
                    obtenerPosts(user.id);
                });

                btnMostrarUsuario.addEventListener("click", function () {
                    pintaUser(user.id);
                });

                //Añadimos los botones a sus celdas
                tdMostrarPosts.appendChild(btnMostrarPosts);
                tdMostrarUsuario.appendChild(btnMostrarUsuario);

                //Añadimos las celdas de los otros campos dentro de la fila
                fila.innerHTML = `
              <td class="lead p-2">${user.id}</td>
              <td class="lead"></td>
              <td class="lead">${user.email}</td>
            `;

                fila.children[1].appendChild(tdMostrarUsuario);
                fila.appendChild(tdMostrarPosts);
                contenedorUsuarios.appendChild(fila);
            });

            //Muestra mensaje de confirmacion en la consola 
            console.log('Datos de usuarios mostrados en la tabla.');
        } catch (error) {
            //En caso de error muestra un error por la consola
            console.error('Error al mostrar datos de usuarios:', error);
        }
    }

    //Funcion para pintar los datos de un usuario mediante su id
    async function pintaUser(id) {
        try {
            // Obtiene los datos del usuario utilizando await
            const datosUsuario = await accedeUser(id);

            // Mostramos la sección de la tabla de usuarios y ocultamos la de los posts
            seccionUsuarios.style.display = 'none';
            seccionPosts.style.display = 'none';
            seccionDatosUsuario.style.display = 'block';

            // Elemento HTML donde se mostrarán los datos
            const datosUsuarioElement = document.getElementById('datosUsuario');

            // Limpia cualquier contenido previo
            datosUsuarioElement.innerHTML = '';

            // Crear el botón para mostrar los posts y darle clases
            const botonMostrarPosts = document.createElement("button");
            botonMostrarPosts.textContent = "Mostrar Posts";
            botonMostrarPosts.classList.add("btn", "custom-btn");

            // Creamos un evento listener para el boton
            botonMostrarPosts.addEventListener("click", function () {
                obtenerPosts(datosUsuario.id);
            });

            // Crear la lista con los datos del usuario
            const lista = document.createElement('ul');
            lista.innerHTML = `<li>ID: ${datosUsuario.id}</li>
                <li>Nombre: ${datosUsuario.name}</li>
                <li>Nombre de usuario: ${datosUsuario.username}</li>
                <li>Email: ${datosUsuario.email}</li>
                <li>Direccion: 
                    <ul>
                    <li>Calle: ${datosUsuario.address.street}</li>
                    <li>Ciudad: ${datosUsuario.address.city}</li>
                    <li>Coordenadas: ${datosUsuario.address.geo.lat}, ${datosUsuario.address.geo.lng}</li>
                    </ul>
                </li>
                <li>Telefono: ${datosUsuario.phone}</li>
                <li>Web: ${datosUsuario.website}</li>
                <li>Compañia:
                    <ul>
                    <li>Nombre: ${datosUsuario.company.name}</li>
                    <li>Eslogan: ${datosUsuario.company.catchPhrase}</li>
                    <li>BS: ${datosUsuario.company.bs}</li>
                    </ul>  
                </li>`;

            // Agregar el botón a la lista de datos del usuario
            lista.appendChild(botonMostrarPosts);

            // Agregar la lista con los datos al contenedor correspondiente
            datosUsuarioElement.appendChild(lista);

            //Muestra mensaje de confirmacion en la consola 
            console.log('Datos de usuario mostrados en la tabla.');
        } catch (error) {
            //En caso de error muestra un error por la consola
            console.error('Error al obtener datos del API:', error);
        }
    }

    //Funcion para mostrar todos los posts o los de un usuario concreto
    async function pintaPosts(posts) {
        try {
            //Obtenemos los datos de la funcion fetch
            const listaPosts = await posts;

            //Elegimos donde iran los datos en el html
            const contenedorPosts = document.getElementById('tablaPosts');

            //Mostramos la seccion de la tabla de posts y ocultamos la de los usuarios
            seccionUsuarios.style.display = 'none';
            seccionPosts.style.display = 'block';
            seccionDatosUsuario.style.display = 'none';

            //Limpiamos la tabla en caso de que tenga contenido
            while (contenedorPosts.rows.length > 1) {
                contenedorPosts.deleteRow(1);
            }

            //Mostramos los datos en la tabla
            listaPosts.forEach(post => {
                //Creamos el elemento que servira de fila para los datos
                const fila = document.createElement('tr');

                //Creamos el botón para el usuario y darle clases
                const botonUsuario = document.createElement("button");
                botonUsuario.textContent = `Usuario ${post.userId}`;
                botonUsuario.classList.add("btn", "custom-btn");

                /*Creamos un evento para que al clickar el boton llame a la funcion
                pintaUser y le pase el id del usuario, para mostrar los datos*/
                botonUsuario.addEventListener("click", function () {
                    pintaUser(post.userId);
                });

                //Creamos la celda para el botón del usuario
                const tdBotonUsuario = document.createElement('td');

                //Agregar el botón del usuario a la celda correspondiente
                tdBotonUsuario.appendChild(botonUsuario);

                //Agregamos las celdas con la informacion de los posts a la fila
                fila.innerHTML = `
                    <td class="bold lead p-2">${post.userId}</td>
                    <td class="bold lead p-2">${post.id}</td>
                    <td class="lead">${post.title}</td>
                    <td class="lead">${post.body}</td>
                `;

                //Añadimos la celda del boton a la fila
                fila.replaceChild(tdBotonUsuario, fila.children[0]);

                //Añadimos la fila al contenedor
                contenedorPosts.appendChild(fila);
            });

            //Muestra mensaje de confirmacion en la consola 
            console.log('Datos de posts mostrados en la tabla.');
        } catch (error) {
            //En caso de error muestra un error por la consola
            console.error('Error al mostrar datos de posts:', error);
        }
    }


});