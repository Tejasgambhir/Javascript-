// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // create symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) symbol datatype 
JsUser.email = "te@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "te@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // ``(back tick) : we called  string interpolation in javascript
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// object assign
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) it combines object in obj3 , we are passing empty object 
// const obj3 = Object.assign(obj1, obj2, obj4) it combines object in obj1

const obj3 = {...obj1, ...obj2}

// destructuring object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "tejas"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);