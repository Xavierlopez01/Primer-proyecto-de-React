import { useState } from 'react'
import './App.css'
import quote from './json/quote.json'
import CardQuote from './components/CardQuote'
import colors from './utils/colors'

function App() {
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  
  let quoteRandom = getRandomElement(quote)
  let colorRandom = getRandomElement(colors)

  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)
  
  const objectStyle = {
    backgroundColor: randomColors
  }
  const getRandomAll = () => {
    quoteRandom = getRandomElement(quote)
    colorRandom = getRandomElement(colors)
    setRandomQuote(quoteRandom)
    setRandomColors(colorRandom)
  }


  return (
    <div className="App" style={objectStyle}>
      <CardQuote
      randomQuote={randomQuote}
      randomColors={randomColors}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
