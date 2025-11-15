  let a1 = parseInt(prompt(" primeiro termo"))
  let n = parseInt(prompt(" segundo termo"))
  let r = parseInt(prompt(" terceiro termo"))
  let an = a1 + (n-1)*r
  let i = 0 
  while (a1<=an){
    document.writeln(a1 + ',')
    a1+=r
  }