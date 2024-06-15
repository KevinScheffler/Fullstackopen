import { useState } from 'react'

// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [counter, setCounter ] = useState(0)
//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {
//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }
//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }
//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//      <Button onClick={increaseByOne} text="plus" />
//      <Button onClick={decreaseByOne} text="minus" />
//      <Button onClick={setToZero} text="zero" />
//     </div>
//   )
// }

// const History = (props) => {
//   console.log(props)
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = (props) => {
//   const { handleClick, text } = props
//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }


// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' /> 
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App



// const Hello = ({ name, age }) => {
  //   const bornYear = () => new Date().getFullYear() - age
  
  //   return (
  //     <div>
  //       <p>Hello {name}, you are {age} years old</p>
  //       <p>So you were probably born in {bornYear()}</p>
  //     </div>
  //   )
  // }
  
  // const App = () => {
  //   const name = 'Peter'
  //   const age = 10
  
  //   return (
  //     <div>
  //       <h1>Greetings</h1>
  //       <Hello name='Maya' age={26 + 10} />
  //       <Hello name={name} age={age} />
  //     </div>
  //   )
  // }