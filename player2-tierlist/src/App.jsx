
import Header from './myComponents/Header'
import Footer from './myComponents/Footer'
import Entry from './myComponents/Entry'
import charactersData from './data/characters.json'

import './App.css'


function App() {
  
  let sortedCharacters = [...charactersData].sort((a, b) => a.rank - b.rank).reverse()


  const characters = sortedCharacters.map(entry =>
    <Entry
      key={entry.id}
      {...entry}
    />
  )

  return (
    <>
      <Header />
      {characters}
      <Footer />
    </>
  )
}

export default App
