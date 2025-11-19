import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (number) str += "0123456789"
    if (character) str += "~!@#$%^&*()"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, character])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <> 
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
        <h3 className='text-white text-center'>Password generator</h3>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-4'>
            copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />

            <label>Length: {length}</label>
          </div>
        </div>

        <div className='flex items-center gap-x-3 mt-4'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={number}
              onChange={() => setNumber(prev => !prev)}
            />
            <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={character}
              onChange={() => setCharacter(prev => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
