const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {
    console.log(a + b)
  },
}

// arto.doAddition(1, 4)

// const referenceToAddition = arto.doAddition
// referenceToAddition(10, 15)

// setTimeout(arto.greet.bind(arto), 1000)

setTimeout(arto.greet.bind(arto), 1000)



