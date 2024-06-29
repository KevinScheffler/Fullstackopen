import { useState, useEffect } from 'react'
import axios from 'axios'

const Header = () => {
  return <h1>Phonebook</h1>
}

const Filter = ({ text, value, handleSearchChange  }) => {
  return (
    <div style={{marginBottom: '15px'}}>
      {text} <input value={value} onChange={handleSearchChange} /> 
    </div>
  )
}

const Button = () => {
  return <button style={{width: '40px'}} type='submit'>add</button>
}

const Form = ({ add, name, nameChange, number, numberChange }) => {
  return (
    <>
      <h3>add a new</h3>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={add}>
        Name:
        <input style={{width: '50%'}} name='name:' value={name} onChange={nameChange} />
        Number:
        <input style={{width: '50%'}} name='number:' value={number} onChange={numberChange} />
        <Button />
      </form>
    </>
  )
}

const Person = ({ person }) => {
  return (
    <div>{person.name} {person.number}</div>
  )
}




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const checkNames = persons.find(person => person.name === newName)

    if (checkNames) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  const filteredNames = searchName
    ? persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
    : persons 


  return (
    <div>
      <Header />
      <Filter text='filter by name:' value={searchName} handleSearchChange={handleSearchChange} />
      <Form 
        add={addPerson} 
        name={newName} 
        nameChange={handleNameChange} 
        number={newNumber} 
        numberChange={handleNumberChange} 
      />
      <h3>Numbers</h3>
      <div>
        {filteredNames.map(person => <Person key={person.id} person={person} />)}
      </div>
    </div>
  )
}

export default App