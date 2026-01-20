import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChevronRight } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-24 my-8'>
      <h1 className='flex text-h5 font-medium items-center gap-2'>New Releases <ChevronRight size={30} /> </h1>
    </div>
  )
}

export default App
