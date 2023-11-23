window.addEventListener("load", function () {

    //Declaramos los atributos del html que necesitaremos
    const formulario = document.querySelector("#formulario");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const url = 'https://jsonplaceholder.typicode.com/users';

    //Creamos un evento para el formulario
    formulario.addEventListener("submit", evento => {
        evento.preventDefault();

        //Llamamos a la funcion para validar el email y la contraseña del formulario
        validarFormulario(emailInput.value, passwordInput.value);

    });

    //Funcion fetch para coger los datos de la apirest
    async function fetchUserData() {
        try {
            const response = await fetch(url);
            const userData = await response.json();
            return userData;
        } catch (error) {
            console.error('Error al obtener datos del API:', error);
            throw error;
        }
    }

    //Funcion para validar formulario
    async function validarFormulario(email, password) {
        try {
            // Obtener datos del API
            const apiData = await fetchUserData();

            // Buscar el usuario con el email proporcionado
            const usuario = apiData.find(user => user.email === email);

            // Verificar si se encontró el usuario y la contraseña coincide con el zipcode
            if (usuario && password === usuario.address.zipcode) {
                console.log("¡Formulario válido!");
                window.open('blog.html', '_self');
                return true;
            } else {
                console.error("Error: Email o contraseña incorrectos");
                marcarError();
                return false;
            }
        } catch (error) {
            console.error('Error al validar el formulario:', error);
        }
    }

    //Funcion para mostrar un error en el div de error
    function marcarError() {
        // Obtenemos la referencia al elemento span por su ID
        var emailErrorSpan = document.getElementById('error');

        //Mandamos el mensaje de error
        emailErrorSpan.textContent = 'Email o contraseña incorrectos';
    }
});