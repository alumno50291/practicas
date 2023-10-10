/*Crea un script en 05-tablamult.html que solicitando un número nos muestre la tabla 
  de multiplicar de dicho número por consola*/

const numero=prompt("Introduzca un numero: ");

const tabla=`1*${numero.trim()}=${numero*1}
2*${numero.trim()}=${numero*2}
3*${numero.trim()}=${numero*3}
4*${numero.trim()}=${numero*4}
5*${numero.trim()}=${numero*5}
6*${numero.trim()}=${numero*6}
7*${numero.trim()}=${numero*7}
8*${numero.trim()}=${numero*8}
9*${numero.trim()}=${numero*9}
10*${numero.trim()}=${numero*10}`;

if(isNaN(numero)){
    console.warn("El valor introducido no es valido.");
} else if (numero>=0){
    console.log(tabla);
} else {
    console.warn("El valor no es positivo.")
}

