// Playing with STRING 
/*
* What is String in javaScript ?

* String are sequence of character 
* Anything written inside the quote in JavaScript 
* Method : length | concat | upperCase | lowerCase | trim | subStr
* we used to calculate the length of the text .length property
* merge one to another string we use .concat method and also avail + operator
* lowerCase & upperCase are used to transform the text
* trim removes white spaces
* subStr Extract the words in present and it takes 1arg as a index and 2arg as character

* More String Methods :
* slice | replace | replaceAll | split | charAt | indexOf | repeat
*/

// String Example :
const str = '  hello buddy ! this is sample string text  '
const str2 = 'concatination text'

console.log(str)
console.log(str.length)
console.log(str.trimStart())
console.log(str.length)

const concatStr = str.concat(str2)
console.log(concatStr)

console.log(str + str2)

console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.includes('hello'))
console.log(str.substring(2,8))
console.log(str.slice(-15)) // supports Negative index [repeates last to first]
console.log(str.charAt(3))
console.log(str.indexOf('hello'))
console.log(str.lastIndexOf('hello'))
console.log(str.replace('hello','hey'))
