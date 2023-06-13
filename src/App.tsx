import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import RectangleGrid from './components/RectangleGrid/RectangleGrid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <RectangleGrid/>
    </>
  )
}

export default App
