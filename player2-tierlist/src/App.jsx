
import Header from './myComponents/Header'
import Footer from './myComponents/Footer'
import Entry from './myComponents/Entry'
import charactersData from './data/characters.json'

import './App.css'


function App() {

  const characters = charactersData.map(entry =>
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
