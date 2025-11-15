let horas = parseInt(prompt("que horas são ?"))

if (horas >=1 && horas <= 11 ){
alert ("a gora são : " +horas+ " horas , AM");

} else if (horas >=13 && horas <=24){
    alert("a gora são :"+horas+ " horas , PM");

}else if ( horas == 12){
    alert(" meio-dia " );

}else if( horas == 0){
alert (" são meia-noite" );
}