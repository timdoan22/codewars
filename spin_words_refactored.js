unction spinWords(sentence){
    const splitWords = sentence.split(' ');
    let result = '';
    splitWords.map((str, i) => {
      if (str.length > 4){
        splitWords[i] = str.split('').reverse().join('');
      } else {
        splitWords[i] = str;
      }
    result = splitWords.join(' ');
    })
    return result;
  }