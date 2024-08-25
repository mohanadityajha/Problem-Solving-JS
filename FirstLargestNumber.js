function findFirstLargestNumber(p, q, r) {
  if (p > q && p > r) {
    return p;
  } else if (q > p && q > r) {
    return q;
  } else if (r > p && r > q) { 
    return r;
    }
}
console.log(findFirstLargestNumber(1,2,3))