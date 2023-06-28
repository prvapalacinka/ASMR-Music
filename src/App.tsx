import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import RectangleGrid from './components/RectangleGrid/RectangleGrid'
import TextTitle from './components/TextTitle/TextTitle'
import Slider from './components/Slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <RectangleGrid/>
     <TextTitle/>
     <Slider/>
    </>
  )
}

export default App
