const numeroMaximo = (numeroMax) => {
  let resul = Math.random() * numeroMax;
  return resul.toFixed(0);
  }

let premios=[];

for (i=0; i<10; i++){
  premios.push(numeroMaximo(99999));
}

console.log(premios);

premios.forEach(function(premio) {
 document.write(`Premio: ${premio} <br>`);
});