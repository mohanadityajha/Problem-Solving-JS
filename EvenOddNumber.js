function findEvenOddNumber(n) { 
  if (n % 2 === 0) {
    return (`${n} is the Even Number`)
  } else {
    return (`${n} is the Odd Number`)
  }
}
console.log(findEvenOddNumber(2))