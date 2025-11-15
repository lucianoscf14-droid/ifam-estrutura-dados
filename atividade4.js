const a=[]; b=[]; c=[]
for(let i=0 ; i<4; i++){
   a[i]=parseInt(prompt())
}
for (let i=0; i<4;i++){
    b[i]=parseInt(prompt())
}
for (let i=0;i<4;i++){
    c[i]=a[i]*b[i]
}
for (let i=0;i<10;i++ ){
    document.writeln(c[i])
}
