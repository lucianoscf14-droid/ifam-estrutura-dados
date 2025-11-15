let n = parseInt(prompt(" digite quantos numeros tera na lista ?"));
let numero = []
let soma = 0 ;

for (let i = 0 ; i < n ; i++){
    numero[i] + parseFloat(prompt(` digite o numero da posicão ${i}:`));
}
for (let i = 0 ; i < n; i++){
    if ( i % 2 !==0 ){
        soma+=numero[i];
    }
}
 console.log(" soma dos elementos das posiçoes impares:",soma);