
let temperatura = parseFloat(prompt("Digite a temperatura:"));

let unidade = parseInt(prompt("Digite a unidade de medida (0 = Celsius, 1 = Fahrenheit):"));

let resultado;

if (unidade == 1) {
    resultado = (temperatura - 30) / 2;
    document.write("Temperatura convertida: " + resultado.toFixed(2)+"fahrenkeit" );
} else if (unidade == 0) {

    resultado = (temperatura * 2) + 30;
    document.write("Temperatura convertida: " + resultado.toFixed(2)+"celsius" );
} else {
    document.write("Unidade inválida!");
}
alert("Obrigado por usar o conversor de temperatura!");