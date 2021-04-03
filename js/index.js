let retorno = 0;
let quant=[0, 0, 0, 0, 0, 0, 0];
let notas = [100, 50, 20, 10, 5, 2 , 1];

let valor = parseInt(gets());

console.log(valor);

while (valor != 0){
  for (let i=0; i < notas.length; i++){

    if (valor >= notas[i]){
      quant[i]= Math.floor(valor/notas[i]);
      valor -= quant[i]* notas[i];
    }else{
      quant[i]= 0;
    }
   console.log(quant[i]+ " notas(s) de R§ " + notas[i].toFixed(2).toString().replace(".", ","));
   }
}