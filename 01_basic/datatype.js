//number 
// bigint
// string
// boolean
// null
// undefined
// symbol =>unique

// object
// console.log(typeof null) // object
// console.log(typeof undefined)// undefined

// stack(primitive datatype) heap(non-primitive)

// stack
let age = 20;
let age2 = age;
age2++;
console.log(age);// in stack age and age2 are different age2 is the copy of age


//heap example
let user1 ={
    name:'tejas'
}
let user2 = user1
user2.name = 'gaurav'
console.log(user1.name); // output: gaurav because user2 and user1 pointing to same reference in heap memory
