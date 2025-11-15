let timeA = (prompt(" qual é o nome do  time  A ?  "));
let timeB = (prompt(" qual é o nome do  time B ?  "));
let gols_timeA = parseInt(prompt("gols do time A ? "));
let gols_timeB = parseInt(prompt("gols do time B ? "));
 
document.writeln("qual é o nome do  time A ? :  "  +timeA+ "<br>");
document.writeln("qual é o nome do  time B ? :  "  +timeB+ "<br>");
document.writeln(" gols do time A : "  +gols_timeA+"<br>");
document.writeln(" gols do time B : "  +gols_timeB+"<br>"); 

if( gols_timeA >  gols_timeB){
alert(" o vencedor é " +timeA);

}else if (gols_timeA < gols_timeB ){
    alert(" o vencedoré "+timeB);

} else {
    alert (" houve em pate ! " +timeA+ " = " +gols_timeA+ " e " +timeB+ " = "+gols_timeB);
}


 