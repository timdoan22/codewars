function moveZeros(arr) {
    for (element of arr) {
        if (element === 0) {
          let remove = arr.splice(arr.indexOf(element), 1)
          arr.push(remove)
        } else {
            ""
        }
    }
    return arr
  }