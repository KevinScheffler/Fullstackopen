const Total = ({ parts }) => {
  const total = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return (
    <h4>total of {total} exercises</h4>
  )
}

export default Total