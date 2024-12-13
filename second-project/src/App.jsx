import Header from './components/Header.jsx'
import Entry from './components/Entry'
import './App.css'
import data from './data.js'

export default function App() {
  const entryElements = data.map((entry) => {
      return (
        <Entry 
          key= {entry.id}
          {...entry}
        />
      )
  })
  return (
    <>
      <Header />
      <div className="travel-data">
        {entryElements}
      </div>
    </>
  )
}