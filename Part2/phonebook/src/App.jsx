import { useState, useEffect } from 'react'
import personService from './services/persons' 

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

const Button = ({ type, text}) => {
  return <button style={{width: '50px'}} type={type}>{text}</button>
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
        <Button type='submit' text='add' />
      </form>
    </>
  )
}

const Person = ({ person, deletePerson }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={deletePerson}>Delete</button>
    </div>
  )
}




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

   
    const checkNames = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    const changedPerson = { ...checkNames, number: newNumber}

    if (checkNames && checkNames.number === personObject.number) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    } 
    else if (checkNames && checkNames.number !== personObject.number) {
      if(window.confirm(`${newName} is already added to the phonebook, would you like to replace the old number with a new one?`)){

        personService
          .updatePerson(checkNames.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== checkNames.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
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

  const deletePersonAt = id => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`))
   {
    personService
    .deletePerson(id)
    setPersons(persons.filter(person => person.id !== id))
   }
  }

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
        {filteredNames.map(person => 
        <Person 
          key={person.id} 
          person={person} 
          deletePerson={() => deletePersonAt(person.id)}
        />)}
      </div>
    </div>
  )
}

export default App