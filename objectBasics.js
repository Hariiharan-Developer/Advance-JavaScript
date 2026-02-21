//Objects 
/*
* What is Object ?
* Objects are collection of properties & methods
* properties followed by key value pairs
* There are 3 ways to write Object 
* Object literel | new keyword | object constructor
* and also accesing the object properties using .Operator and []notation
* Object is a datatype in java scripts
* it allows to write properties other type starting from number, string, boolean, array
*/


// difference between Object & variable ?
/*
* Object and variables are used to store data but the differences between
* variable stores single data and Object stores multiple data
 */

// Object literal :
const student ={
    name : 'hariharan',
    age:24,
    course :'MERN stack'
}
console.log(student)

// New key word :
const student1 = new Object()
student1.name = 'Ajith kumar'
console.log(student1)

// Accesing object :
console.log(student.name)
console.log(student['course'])

// updating object properties :
student.name ='Rockey bai'
student1['name'] = 'Ak'
console.log(student)
console.log(student1)

// accessing property Dynamically :

let key = 'name'
student[key] = 'dynamic name'
console.log(student)

let value = 'course'
student[value] = 'Full stack dev'
console.log(student.course)

// different data type inside object :

const diffObj = {
    name :'String',
    age : 24,
    active : true ,
    category :['electronics','foods','snacks'],
    item:{
        name: 'bluethooth headphone',
        price : 1299,
        brand : 'skullcandy',
        inStock :true
    }
}

console.log(diffObj)
diffObj.active = false
diffObj.category[0] = 'accesories'
diffObj.item.category = 'accesories'

console.log(diffObj)


