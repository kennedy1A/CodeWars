function highAndLow(numbers){
 let array = numbers.split(' ').map(Number);
let array1= Math.max(...array)
 let array2 = Math.min(...array)
  return  `${array1} ${array2}`
}