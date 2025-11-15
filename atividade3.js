let quantidade = parseInt(prompt(" quantos numeros ?"));
var pares = 0 
const numeros = []
for (let i=0; i<quantidade; i++){
    numeros[i] = prompt()
    if(numeros[i] % 2 ==0)
        pares++
    }
document.writeln(`<br> numeros informados </b><br>`)
for(let i=0; i<quantidade; i++ ){
    document.writeln(numeros[i])
}
document.writeln(`<br> quantidade de pares: ${pares}`)

