function mergeArrays(arr1, arr2) {
    arr2.forEach(num => arr1.includes(num) ? "" : arr1.push(num))
        /*for (num of arr2) {
                 if (arr1.includes(num)) {
              continue;
            } else {
              arr1.push(num)
            }
          } */
    arr1.sort(function(a, b) {
    return a - b;
  })
    return arr1
  }
