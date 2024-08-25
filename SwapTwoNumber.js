function findSwapTwoNumber(a,b) {
  a = a - b ;
  b = a + b ;
  a = b - a ;
return (`${a} and ${b}`)
}
console.log(findSwapTwoNumber(10,20))