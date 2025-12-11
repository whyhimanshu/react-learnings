import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='text-3xl bg-blue-700 rounded-md p-3'>Vite with Tailwind</h1>
        <Card username="Himanshu" post='Engineer'/>
        <Card />
        <Card />
    </>
  )
}

export default App
