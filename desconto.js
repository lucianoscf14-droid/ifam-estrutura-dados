let preco = parseFloat(prompt("digete o preço do produto "))
let desconto = parseFloat(prompt("qual é o desconto "))

let valordesconto = (preco * desconto)/100
let precofinal = (preco-valordesconto);
alert(" o preço do pruduto é " + precofinal);