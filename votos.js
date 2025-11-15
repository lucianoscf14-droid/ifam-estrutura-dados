let rotA=0, rotB=0, conNulos=0, contBranco=0
do {
    var op = prompt("qual onibus te transporta ?\n rota A \n rota b")
    switch(op){
        case'0':contBranco++;break;
        case'1':rotA++;break;
        case'2':rotB++;break;
        default:conNulos++;break
    }
}while(op!='-1');
alert(`eleição encerrada\nRota A = ${rotA} \n Rota B = ${rotB}\n branco = ${contBranco} \n nulo:${conNulos}\n quantidade de participamte
    :${contBranco+conNulos+rotA+rotB-1}`)