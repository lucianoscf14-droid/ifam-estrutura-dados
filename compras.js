let carrinho = parseInt(prompt(" itens"))
var total = 0 ; itens = 0
document.writeln(`<b>Mercadinho do Luciano</b><br>`)
for (let i= 1 ; i <= carrinho; i++){
    itens = parseFloat(prompt(`itens ${i} :`))
    document.writeln(` itens ${i} = R$ ${itens}<br>`)
    total+=itens
}
document.writeln(`<b>Valor Total</b>: R$ ${total}`)
