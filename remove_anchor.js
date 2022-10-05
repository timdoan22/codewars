// Complete the function/method so that it returns the url with anything 
// after the anchor (#) removed. 

// Parameters: it should accept a valid URL as an input
// Result: it should return the URL with the anchor removed
// Example: 
// "www.example.com#about" --> "www.example.com"
// "www.example.com?page=1" -->"www.example.com?page=1"
// Pseudocode:
// 1) transform the url string into an array and split the string into separate
// elements if there is a '#' symbol. 
// 2) if there is a '#' symbol, return just the first element in the array

function removeUrlAnchor(url){
    return url.split('#')[0];
  }

  console.log(removeUrlAnchor('www.codewars.com#about'))