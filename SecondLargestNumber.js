function findSecondLargestNumber(arr) {
  let firstLargestNumber = arr[0]
  let secondLargestNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > firstLargestNumber) {
      secondLargestNumber = firstLargestNumber
      firstLargestNumber = arr[i]

    } else if (arr[i] > secondLargestNumber && arr[i] < firstLargestNumber) { 

      secondLargestNumber = arr[i]
    }
   }
  return secondLargestNumber;
}
console.log(findSecondLargestNumber([1, 2, 3]))