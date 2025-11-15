var dormir = parseInt(prompt("qual foi a hora que vc dormiu ?"))
var acorda = parseInt(prompt(" qual foi a hora que acorda ?"  ))    
var sono = 0
     if (dormir > 12 && acorda < 12 ){
    sono = 24 - (dormir - acorda)
    alert (`${sono} horas de sono`)
}
else {
   sono = acorda - dormir
   alert(`${sono} horas de sono`)

}
let i = 1
while (  i <=sono ){
   alert (`${i} horas dormido`)
    i++;
}
