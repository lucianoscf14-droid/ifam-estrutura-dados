let quantos =parseInt(prompt("quantos numeros deseja armazenar ?:"))
const vetor = [];
for(let i=0; i<quantos; i++){
    vetor[i] = parseInt(prompt(`informe o numero:`));
}
document.writeln(`os numeros digitados foram armazenados: `)
for(let i=0; i<quantos; i++){
    document.writeln(vetor[i]);
}