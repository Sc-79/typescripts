interface Person{
    name:string;
    age?:number;

}
const person1:Person = {
    name:'sourav chongrey',

}
const person2:Person = {
    name:'sourav chongrey',
    age:30,
}
// console.log(person1.age)  undefined
console.log(person2.age)
console.log(person2.name)
// console.log(person1.name) sourav chongrey
// sourav chongrey