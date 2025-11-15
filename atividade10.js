let n = parseInt(prompt(" digite o numero da disciplina "))
let nota = []
let soma = 0;
let media 

for (let i = 0; i<n ;i++){
    nota[i] = parseFloat(prompt("informe a nota ") +(i+1))
    soma +=nota[i]
}
media = soma/n
if(media <6){
    alert(" reprovado por medis:"+media.toFixed(2))
}else {
    alert("aprovado por media:"+ media.toFixed(2))
}