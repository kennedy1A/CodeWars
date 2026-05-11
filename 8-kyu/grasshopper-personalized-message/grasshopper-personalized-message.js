function greet (name, owner) {
  if(name===owner){
    return`Hello boss`
  } else{
    return 'Hello guest'
  } 
}
console.log(greet('kennedy','kennedy'))
console.log(greet('Yves','Kennedy'))