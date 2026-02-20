// Numbers in JavaScript :
/*
* JavaScript dont have any data type like int & float all numbers and decimal values are represent numbers only
* numbers can store variable like let number = 10
* methods are used in numbers toFixed , to pecision , toString
* tofixed() method return string and this used to summarize the decimal value
* toPrecison() method used to calculate the total number of significant value
* to String method convers string to number


* isNaN converts first to number then check
* NaN === NaN the onely value not equal to itself 
* Number.isNaN = strict mode shouldnt converts 
*/

// Boolean in javaScript :
/*
* Boolean are stores only true or false value its very use full in coding like if you like apple yes(or)no
*/

const number = 123.358
console.log(typeof(number),number)

const tofixed =number.toFixed(0)
console.log(typeof(tofixed) , tofixed)

const toprecison = number.toPrecision(5)
console.log(typeof(toprecison), toprecison)


const tostring = number.toString()
console.log(typeof(tostring), tostring)


//Boolean :
console.log(isNaN(Number))
console.log(isNaN(tostring))
console.log(isNaN===isNaN)
console.log(NaN===NaN)
console.log(isNaN('bw'))
console.log(typeof(undefined))
console.log(typeof(null))
console.log(typeof(NaN))
console.log(typeof(isNaN))
