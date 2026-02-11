//  const aboutFunc = ()=>{
//         console.log(this);
//         console.log(this.fullName, this.age);   
//     }

// const user1 = {
//     fullName : "Shuaib",
//     age : 25,
//     aboutObj : {
//         key : "value1",
//         aboutInner:()=>{
//         console.log(this.fullName, this.age);   
//     }
//     }
// }

// user1.aboutObj.aboutInner();


// const user2 = {
//     fullName : "Asad Khan",
//     age:24,
//     about(){
//         console.log(this);
        
//         console.log(this.fullName, this.age);   
//     }
// }

// console.log(user2.about());

// Step One for approaching to OOP
// const user1 = {
//     firstName : "Shuaib",
//     lastName : "Khan",
//     age : 25,
//     address : {
//        country : "Paksitan",
//        province : "KPK",
//        district : "Swat",
//        tehsil : "Barikot",
//        village : "Aboha"
//     },
//     about(){
//         return `Hello My name is ${this.firstName} ${this.lastName}, i am ${this.age} years old, and i am from ${this.address.province} ${this.address.country}.`    
//     }
// }
// const user2 = {
//     firstName : "Shuaib",
//     lastName : "Khan",
//     age : 25,
//     address : {
//        country : "Paksitan",
//        province : "KPK",
//        district : "Swat",
//        tehsil : "Barikot",
//        village : "Aboha"
//     },
//     about(){
//         return `Hello My name is ${this.firstName} ${this.lastName}, i am ${this.age} years old, and i am from ${this.address.province} ${this.address.country}.`    
//     }
// }

// const user3 = {
//     firstName : "Shuaib",
//     lastName : "Khan",
//     age : 25,
//     address : {
//        country : "Paksitan",
//        province : "KPK",
//        district : "Swat",
//        tehsil : "Barikot",
//        village : "Aboha"
//     },
//     about(){
//         return `Hello My name is ${this.firstName} ${this.lastName}, i am ${this.age} years old, and i am from ${this.address.province} ${this.address.country}.`    
//     }
// }

// console.log(user1.about());

// const userMethods = {
//     about : function(){
//     return `Hello My name is ${this.firstName} ${this.lastName}, i am ${this.age} years old`; 
//     }
// }

// function User(firstName, lastName, age){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName,
//     user.age = age;
//     user.about = userMethods.about
//     return user;
// }

// console.log(User("Asad", "Khan", 23));
// console.log(User("Shuaib", "khan", 25));

// const obj1 = {
//     key1 : "value 1",
//     key2 : "value 2"
// }

// const obj2 = Object.create(obj1);
// console.log(obj2.key1);



const userMethods = {
    about : function(){
    return `Hello My name is ${this.firstName} ${this.lastName}, i am ${this.age} years old`; 
    }
}

function userFunc(firstName, lastName, age){
    const user = Object.create(userFunc.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    return user;
}
userFunc.prototype.about = function(){
    return `Hello My name is ${this.firstName} ${this.lastName}, i am ${this.age} years old`; 
    }
const func1 = userFunc("Asad", "Khan", 23)
const func2 = userFunc("Shuaib", "khan", 25)
console.log(func1.about());





