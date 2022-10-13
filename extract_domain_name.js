// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

// Parameters: accepts a url string as an input
// Result: it should return just the domain name
// Example: 
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet
// Pseudocode: 
// 1) use the replace method to replace all related http and www suffixes with an empty "" string
// 2) just the split('.') method to split the url into the domain name and ending related .com suffixes
// 3) return just the first portion containing the domain name portion in the split array 


let extractDomain = function(url) {
    let replaceURL = url.replace('https', '').replace('http', '').replace('://', '').replace('www.', '').split('.')
    return replaceURL[0]
}

console.log(extractDomain('http://github.com/carbonfive/raygun'))
console.log(extractDomain('http://www.zombie-bites.com'))
console.log(extractDomain('https://www.cnet.com'))
console.log(extractDomain('www.xakep.ru'))
