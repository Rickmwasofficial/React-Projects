import Header from './components/Header.jsx'
import Entry from './components/Entry'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <div className="travel-data">
        <Entry />
      </div>
    </>
  )
}