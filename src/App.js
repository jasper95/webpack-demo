import React, { useReducer } from 'react'
import { hot } from 'react-hot-loader/root'

function App(props) {
  console.log('process.env', process.env)
  const [state, handleEvent] = useReducer(reducer.bind(null, props), { count: 0 })
  const {
    count
  } = state
  return (
    <div>
      <button onClick={() => handleEvent({ type: 'increment' })}>+</button>
      {count}
      <button onClick={() => handleEvent({ type: 'decrement'})}>-</button>
      Hello World
    </div>
  )
}

function reducer(props, state, { type, payload }) {
  switch(type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}


export default hot(App)