import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ColorChanger from './components/ColorChanger'

// function App() {
//   // let counter = 5
//   let [counter, setCounter] = useState(15)

//   const addValue = () => {
//     console.log("clicked", counter);
//     // counter = counter + 1
//     if (counter == 20) {
//       setCounter(counter = 20)
//     }else{
//       setCounter(counter + 1)
//       setCounter(counter + 4)
//     }
    
//   }

//   const removeValue = () => {
//     if(counter == 0){
//       setCounter(counter = 0)
//     }
//     else{setCounter(counter -1)
//     }
//   }

//   return (
//     <>
//       <h1>Chai aur React</h1>
//       <h2>Counter value: {counter}</h2>

//       <button
//       onClick={addValue}
//       >Add Value</button>
//       <br />
//       <br />
//       <button
//       onClick={removeValue}
//       >Remove Value</button>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <Card username="talha" btnText="click me"/>
//     </>
//   )
// }

function App() {
  return(
    <ColorChanger />
  )
}

export default App
