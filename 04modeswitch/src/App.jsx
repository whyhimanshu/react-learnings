import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor('black')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'black'}}  
          >Black</button>
          <button
          onClick={() => setColor('white')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'white'}}
          >White</button>
          <button
          onClick={() => randomColor()}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor: 'purple'}}
          >Random</button>
          </div>
      </div>
    </div>
  )
}

export default App
