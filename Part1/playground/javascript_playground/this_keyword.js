/*
  Understanding JavaScript's this
  Keyword in Depth
*/


// console.log(this === module.exports)

// "use strict"

// function func() {
//   console.log(this === undefined)
// }

// func()

// function Person(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName

//   return {
//     firstName: "John",
//     lastName: "Roe"
//   }
// }

// const person = new Person("Jane", "Doe")
// console.log(person)


// const person = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hi, my name is ${this.firstName}!`)
//   }
// }

// setTimeout(person.sayHi.bind(person), 1000)

function sayHi() {
  console.log(`Hi, my name is ${this.firstName}!`)
}

const person = {
  firstName: "Jane",
  lastName: "Doe"
}

// sayHi.call(person)
// sayHi.apply(person)

const numbers = [10, 20, 30, 40, 50]

const slice1 = numbers.slice(1, 4)
console.log(numbers)

const slice2 = numbers.slice.call(numbers, 1, 4)
console.log(slice2)

const slice3 = numbers.slice.apply(numbers, [1, 4])
console.log(slice3)

// (c)all => (c)omma
// (a)pply => {a}rray