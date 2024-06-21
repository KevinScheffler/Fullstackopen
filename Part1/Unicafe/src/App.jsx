import { useState } from 'react'

const Header = () => {
  return <h1>give feedback</h1>
}

const Button = (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = (props) => {
  const {text, value} = props
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, bad, neutral, all }) => {
  const average = all > 0 ? (good - bad) / all : 0
  const positive = all > 0 ? (good / all) * 100 : 0

  if (all === 0) {
    return <p>no feedback given</p>
  }
  return ( 
    <>
    <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td><Statistic text="good" /></td>
            <td><Statistic value={good} /></td>
          </tr>
          <tr>
            <td> <Statistic text="neutral" /></td>
            <td> <Statistic value={neutral} /></td>
          </tr>
          <tr>
            <td><Statistic text="bad" /></td>
            <td><Statistic value={bad} /></td>
          </tr>
          <tr>
            <td><Statistic text="all" /></td>
            <td><Statistic value={all} /></td>
          </tr>
          <tr>
            <td><Statistic text="average" /></td>
            <td><Statistic value={average.toFixed(1)} /></td>
          </tr>
          <tr>
            <td><Statistic text="positive" /></td>
            <td><Statistic value={positive.toFixed(1)} /></td>
          </tr>
        </tbody>
    </table>
    </>
    
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App