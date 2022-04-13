function getFirstPython(list) {
    for (user of list)
      if (user.language === 'Python')
        return `${user.firstName}, ${user.country}`
    return 'There will be no Python developers'
   }