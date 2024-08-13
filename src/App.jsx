import { useState } from 'react'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Pricing />
     
    </>
  )
}

export default App
