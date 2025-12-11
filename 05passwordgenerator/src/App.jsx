import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) {
      str += '0123456789'
    }
    if (characterAllowed) {
      str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }
    for (let i=1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
  }
  setPassword(pass)
}, [length, numberAllowed, characterAllowed])

useEffect(() => {
  generatePassword()
  
}, [length,numberAllowed,characterAllowed])

const copyPasswordToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(password)
    // Select input so user sees it selected as well
    if (passwordRef.current) passwordRef.current.select()
    // show tick icon briefly
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  } catch (e) {
    // fallback: still select the input so user can copy manually
    if (passwordRef.current) passwordRef.current.select()
    // don't change copied state
  }
}

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black bg-white' placeholder='Password' readOnly ref={passwordRef}/>
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 flex items-center gap-2'
          onClick={copyPasswordToClipboard}
          aria-label={copied ? 'Copied' : 'Copy password'}
        >
          {copied ? (
            // simple tick icon (SVG)
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            'Copy'
          )}
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" name="" id="" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
          <label htmlFor="length">Length: {length}</label>
        </div>
      <div className='flex text-sm gap-x-2'>
        <input type="checkbox" name="" id="" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev)=> !prev)}  />
        <label htmlFor="number">Numbers</label>
        
    </div>
    <div className='flex text-sm gap-x-2'>
        <input type="checkbox" name="" id="" defaultChecked={characterAllowed} onChange={() => setCharacterAllowed((prev)=> !prev)}  />
        <label htmlFor="character">Characters</label>
        
    </div>
      </div>
    </div>
    </>
  )
}

export default App
