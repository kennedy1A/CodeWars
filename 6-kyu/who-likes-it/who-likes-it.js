/* A function must be having an array.
If array has no element it should return a negative text.
If an array has one element It will console that element plus a text
if an arry has two more element it will console those elements a text
If it has four elements it will great first 2 and then add another modified text*/
​
function likes(names) {
  if (names.length === 0){
    return'no one likes this'
  }else if (names.length === 1){
    return `${names[0]} likes this`
  }else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if (names.length ===3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`  
  }else {
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }