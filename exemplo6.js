let paginas = parseInt(prompt("quantas paginas seram impressas ? "));
let impressao = prompt(" digete o tipo de impressão ( frente-verso ou lado-unico )? ")
let valor = 0;


if (impressao.toLocaleLowerCase()=="frente-verso"){ 
  valor = paginas*0.10
 
}else if (impressao.toLocaleLowerCase()=="lado-unico"){
    valor = paginas*0.15
}else {
    document.writeln("tipo de impressão invalida !")
}
if (valor > 0 ){
    document.writeln("o custo final da impressão é :"+valor.toFixed(2)+"<br>")
    alert("obrigado pela preferencia !")
}