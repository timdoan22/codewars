function maxDiff(list) {
    const returnNum = (Math.max(...list) - Math.min(...list))
    if (list === undefined || list.length < 1)
      return 0
    else
      return returnNum
  };