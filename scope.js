// What is SCOPE ?
/*
* The  Normal scenario when we try to acces something it falls your scope or else it falls outer than your scope same concept

* we declared a variable inside the function we try to acces the variable outer side the function system encouterd with error why ?

* Javascript has many type of scopes :
* Basic Begiber Level : [GLOBAL SCOPE & LOCAL SCOPE]
* Advance Level : [Function Scope & Lexical Scope & Block Scope]

*/

// Global Scope :
let globalVar = 'hello im a Global variable'

const globalFunction =()=>{
    console.log(`Inside the function ${globalVar}`)
}

globalFunction()
console.log(`Outside the function ${globalVar}`)


// Local Scope :

const localFunction =()=>{
    let localVar ='hello im a local variable'
    console.log(`inisde function ${localVar}`)
}

localFunction()
/*
* console.log(`inisde function ${localVar}`) // Reference Error : localVar not defined
*/