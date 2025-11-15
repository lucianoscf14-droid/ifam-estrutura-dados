let n = parseInt(prompt(" quantos numeros deseja digitar"))
let numero = []
let soma = 0 ;

for (let i = 0 ; i< n ; i++){
  numero[i] = parseFloat(prompt(" digite o numero " + (i+1) + ":"))
  soma += numero [i];

}
if ( soma > 100){
  console.log(" os numeros digitados :", numero);
  console.log(" A soma dos numeros é:"+soma);
}else{
   console.log(" A soma ("+ soma +") não é maior que 100.");
}
  