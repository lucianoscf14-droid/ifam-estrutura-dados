let informatica = parseFloat(prompt("qual foi a nota em informatica ?"));
let redes = parseFloat(prompt("qual foi a nota em redes ?"));
let analise = parseFloat(prompt("qual foi a nota em analise "));
let logica = parseFloat(prompt("qual é a nota em logica ?"));

let media = (informatica + redes + analise + logica) /4

      document.writeln (" nota :" +informatica+ "," +redes+ "," +analise+ "," +logica+ " <br>");

      document.writeln ("media:" +media.toFixed(2)+ "<br>" );

      console.log("media redondada para cima: " +Math.ceil(media) );

      alert ("media redondada para baixo:" + Math.floor(media));

if (media >= 6 ){
document.writeln("situação : aprovada ");

}else if( media <=5){
    document.writeln("situação : reprovado ! ");
}
