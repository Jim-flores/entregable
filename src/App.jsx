import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import quote from './json/quote.json'

function App() {
  const arrayColors = [
    '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#808080', '#800000', '#008000', '#008080'
  ]
  const createNumberRandom = array =>{
    return Math.floor(Math.random() * array.length)
  }
  let indexUserRandom = createNumberRandom(quote)
  let indexColorRandom = createNumberRandom(arrayColors)

  const [userRandom, setUserRandom] = useState(quote[indexUserRandom])
  const [colorRandom, setColorRandom] = useState(arrayColors[indexColorRandom])

  const appStyle = {
    backgroundColor: colorRandom
  }
  return (
    <div className="App" style={appStyle}>
      <Card
        userRandom = {userRandom}
        colorRandom = {colorRandom}
      />
    </div>
  )
}

export default App
