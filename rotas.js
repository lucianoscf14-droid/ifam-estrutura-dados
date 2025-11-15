let rotas = prompt("ROTAS; \n 1: rota A \n 2: rota B")
do{
  switch (rotas) {
  case "1":
    alert("rota A");
    break;
  case "2":
    alert("rota B");
    break;
  default:
    alert(`não tem rota ${rotas}.`);
}
}while(rota!="123")