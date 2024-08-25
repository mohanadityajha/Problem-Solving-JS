function findPrimeNumber(n) {
  for (let i = 1; i < n; i++) {
    if (n === 2) {
      return (`${n} is the Prime Number`)
    } if (n % 2 === 0) {
      return (`${n} is not  Prime Number`)
    } else {
      return (`${n} is the  Prime Number`)
     }
   }
}
console.log(findPrimeNumber(4))