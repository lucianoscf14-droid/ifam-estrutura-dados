let sabado = parseInt (prompt("vocé veio sabado passado ? '0=não e 1=sim' "));
let sabatista = parseInt(prompt(" vocé é diventista ou guarda o sabado letivo ? 0=não e 1=sim "));
let programa = parseInt (prompt(" vocé gosta de programar ? 0=não e 1=sim "));
let disciplina = parseInt  (prompt (" vocé acha essa disciplina dificil ? 0=não e 1=sim  "));

     document.writeln (" voce veio sabado passado ? : "+sabado+  " <br>");
     document.writeln(" vocé é adiventista ou guarda o sabado letivo ? : "+sabatista+   "<br>");
     document.writeln(" vocé gosta de programar ? : "+ programa+   "<br>");
     document.writeln (" vocé acha essa disciplina difici? : "+disciplina +  "<br>");

 let media = ( sabado + sabatista + programa + disciplina);document.writeln("a soma das resposta é"  +media+"<br>")

 if ( media % 2 == 0){
    alert(" a soma é PAR");
 }else {
  alert (" a soma é impar");
}