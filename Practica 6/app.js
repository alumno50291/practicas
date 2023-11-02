//Creamos un eventlistener para cargar el script cuando carga el html
window.addEventListener("load", function () {

  //Recojo las variables que necesito del formulario de la tarjeta y el boton
  const tarjeta = document.querySelector("#numTarjeta");
  const btnValidar = document.querySelector("#btn-validar");

  //Creo un evento de escucha para cuando el boton guardado en btnValidar sea pulsado
  btnValidar.addEventListener("click", evento => {

    evento.preventDefault();

    //Llamo a la funcion "validaTarjeta" y le paso el valor recibido del formulario para validarla
    validaTarjeta(tarjeta);
  });

  //Funcion que recorre los radiobuttons, determina cual esta marcado y lo retorna
  function obtenerTipoTarjeta() {
    var opciones = document.getElementsByName("tipocard");

    for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        return opciones[i].value;
      }
    }
  }

  //Funcion que haciendo uso de la tarjeta y el tipo, 
  //valida la tarjeta haciendo uso de la expresion regular correspondiente
  function validaTarjeta(el) {
    //Variable que recoge el tipo de los radiobuttons usando la funcion obtenerTipoTarjeta
    const tipo = obtenerTipoTarjeta();
    let erTarjeta = null;

    switch (tipo) {
      case "VISA":
        erTarjeta = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
        break;
      case "MASTERCARD":
        erTarjeta = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
        break;
      case "NARANJA":
        erTarjeta = /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/;
        break;
      case "CABAL":
        erTarjeta = /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/;
        break;
      case "AMEX":
        erTarjeta = /^3[47][0-9-]{16}$/;
        break;
    }
    console.log(`TIPO= ${tipo}, ER= ${erTarjeta}, TARJETA= ${tarjeta.value}`);

    if (erTarjeta.test(el.value.trim())) {
      marcarValido();
    } else {
      marcarError();
    }
  }

  //Funcion que recoge los divs de feedback, muestra el de invalido y oculta el de valido
  function marcarError() {
    var divError = document.querySelector(".invalid-feedback");
    var divValido = document.querySelector(".valid-feedback");

    divError.style.display = "block";
    divValido.style.display = "none";
  }

  function marcarValido() {
    var divError = document.querySelector(".invalid-feedback");
    var divValido = document.querySelector(".valid-feedback");

    divError.style.display = "none";
    divValido.style.display = "block";
  }

});