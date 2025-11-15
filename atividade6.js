let quantidade= parseInt(prompt("quantos itens deseja cadastra ? "));
const itens =[];
const valores = [];
let total = 0;
for (let i=0; i<quantidade; i++){
    itens[i]=prompt(`digite o nome do ${ i + 1} intem`);
    valores[i]=parseFloat(prompt(`digite o valor do ${ i + 1 }° item`));
    total += valores[i];
}
document.writeln(" o <br> itens cadastrados :<br>");
for (let i=0; i <quantidade; i++ ){
    document.writeln(`${i+1} - ${itens[i]}: RS ${valores[i]} `);
}
document.writeln(`<br>total:RS ${total.toFixed(2)}<br>`);