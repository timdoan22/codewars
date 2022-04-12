function sumOfMinimums(numbers) {
    let minNumbers = 0
    for (arr of numbers)
       minNumbers += Math.min(...arr)
    return minNumbers
  }