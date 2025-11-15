let quantidade = parseInt(prompt("Quantas pessoas serão entrevistadas?"));
const idades = [];
let soma = 0;

for (let i = 0; i < quantidade; i++) {
    idades[i] = parseInt(prompt(`Digite a idade da ${i + 1}ª pessoa:`));
    soma += idades[i];
}

let media = soma / quantidade;

document.writeln("<b>Idades informadas:</b><br>");
for (let i = 0; i < quantidade; i++) {
    document.writeln(idades[i] + "<br>");
}

document.writeln(`<br><b>Média das idades:</b> ${media.toFixed()}`)
