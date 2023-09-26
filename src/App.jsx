import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
          <Routes>
              <Route exact path='/' element={<><Navbar /><Body /></>} />
              <Route exact path='/search' element={<Search />} />
          </Routes>
    </>
  )
}

export default App
