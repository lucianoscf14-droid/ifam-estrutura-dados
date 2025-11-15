let n = parseInt(prompt(" digite um numero para tabuada "));
let tabuada = [];

for (let i = 0 ; i <= 10 ; i++){
    tabuada[i] = n * i ;
}
console.log(" tabuada de " + n + "( tabuada):");
console.log(tabuada);