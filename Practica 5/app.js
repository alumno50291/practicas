window.addEventListener("load", function(){
    const formulario = document.querySelector("#formulario");
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const email = document.querySelector("#email");
    const fecha = document.querySelector("#fecha");
    const dni = document.querySelector("#dni");
    const cp = document.querySelector("#cp");
    const telefono = document.querySelector("#telefono");
    const usuario = document.querySelector("#usuario");
    const contraseña = document.querySelector("#passwd");
    const condiciones = document.querySelector("#condiciones");
    const tarjeta = document.querySelector("#tarjeta")
    

    formulario.addEventListener("submit", evento =>{
        evento.preventDefault();
        let valido = true;
        //Validar nombre
        if(!nombre.value){
            marcarError(nombre, "El nombre no puede estar vacio.");
            valido = false;
        } else{
            marcarValido(nombre, "");
        }

        //Validar apellido
        if(!apellido.value){
            marcarError(apellido, "El apellido no puede estar vacio.");
            valido = false;
        } else {
            marcarValido(apellido, "");
        }

        //Validar email
        if (!email.value) {
            marcarError(email, "El email no puede estar vacío.");
        } else if (!validaEmail(email)) {
            valido = false;
        }
        
        //Validar fecha
        if(!fecha.value){
            marcarError(fecha, "La fecha no puede estar vacia.");
            valido = false;
        } else {
            marcarValido(fecha, "");
        }

        //Validar Telefono
        if(!telefono.value){
            marcarError(telefono, "El telefono no puede estar vacio.");
            valido = false;
        } else if (isNaN(telefono.value)){
            marcarError(telefono, "El telefono debe ser un numero.");
            valido = false;
        } else if (!validaTelefono(telefono)){
            valido = false;
        }

        //Validar DNI
        if(!dni.value){
            marcarError(dni, "El DNI no puede estar vacio.");
            valido = false;
        } else if (!validaDNI(dni)){
            valido = false;
        }

        //Validar CP
        if(!cp.value){
            marcarError(cp, "El codigo postal no puede estar vacio.");
            valido = false;
        } else if (!validaCP(cp)){
            valido = false;
        }

    
        //Validar Usuario
        if(!usuario.value){
            marcarError(usuario, "El usuario no puede estar vacio.");
            valido = false;
        } else {
            marcarValido(usuario, "");
        }

        //Valida constraseña
        if(!contraseña.value){
            marcarError(contraseña, "La contraseña no puede estar vacia.");
            valido = false;
        } else if (!validaPasswd(contraseña)){
            valido = false;
        }

        //Valida condiciones
        if(!validaPrivacidad(condiciones)){
            valido = false;
        }

        //Valida tarjeta
        if(!tarjeta.value){
            marcarError(tarjeta, "La tarjeta no puede estar vacia.");
            valido = false;
        } else if(!validaTarjeta(tarjeta)){
            valido = false;
        }
        
        if(valido){
            formulario.submit();
        }

        
    });

    function validaPasswd(el) {
        const erContraseña = /^[a-zA-Z0-9]{8,10}$/;
        if (el.value.match(erContraseña)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el, "La contraseña debe contener entre 8 y 10 caracteres alfanuméricos.");
            return false;
        }
    }

    function validaTarjeta(el) {
        const erTarjeta = /^[4|5|6|3][0-9]{15}$/;
        if (el.value.match(erTarjeta)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el, "Numero de tarjeta no valido.");
            return false;
        }
    }

    function validaTelefono(el){
        const erTelefono = /^(9|8|6|7)[0-9]{8}$/;
        if (erTelefono.test(el.value.trim())){
            marcarValido(telefono, "");
            return true;
        } else {
            marcarError(el, "El numero de telefono no es valido.");
            return false;
        }
    }
    
    function validaEmail(el) {
        const erMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (erMail.test(el.value.trim())) {
          marcarValido(el);
          return true;
        } else {
          marcarError(el, "El email no tiene formato valido.");
          return false;
        }
      }

    /*function validaFecha(el) {
        const erFecha = /^([0-9]{1,2})-([0-9]{1,2})-([0-9]{4})$/;
        const fechaValue = el.value.trim();
        if (fechaValue.match(erFecha)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el, "La fecha no tiene formato valido.");
            return false;
        }
    }*/

    function validaDNI(el) {
        const erDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
        const dnivalue = el.value.trim();
        if (dnivalue.match(erDNI)) {
          marcarValido(el);
          return true;
        } else {
          marcarError(el, "El DNI introducido no es valido.");
          return false;
        }
    }

    function validaCP(el) {
        const erCP = /^[0-5][0-9]{4}$/;
        const cpvalue = el.value.trim();
        if (cpvalue.match(erCP)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el, "El codigo postal no es valido.");
            return false;
        }
    }

    function validaPrivacidad(el) {
        if (el.checked) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el, "Debe aceptar las condiciones.");
            return false;
        }
    }
    

    function marcarError(el, mensaje){
        el.parentNode.querySelector(".error-feedback").textContent=mensaje;
        el.parentNode.classList.add("error");
    }

    function marcarValido(el){
        el.parentNode.querySelector(".error-feedback").textContent="";
        el.parentNode.classList.remove("error");
    }
});