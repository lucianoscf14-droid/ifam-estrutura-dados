let numero =parseInt(prompt("numeros desejado?"))
let vetor =[]
for (let i=0 ; i<numero;i++){
    vetor[i] = prompt("digete o valor" +(i+1+":"));
}
for (let i = numero -1;i>=0;i--){
    document.writeln(vetor[i]+"<br>")
}