import { useState } from 'react'
import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import { Routes,Route,useNavigate} from 'react-router-dom'
import { searchData } from './API/googleSearch'
import Index from './Components/searchPage/Index'


function App() {
  const navigate = useNavigate()
  const [searchTerm,setSearchTerm] = useState('')
  const [googleData,setGoogleData] = useState({})

  const setSearch = async (term)=>{
    setSearchTerm(term)
    const data = await searchData(term)
    setGoogleData(data)
    navigate('/index')
  }


  return (
    <>
          <Routes>
              <Route exact path='/' element={<><Navbar /><Body setSearch={setSearch}/></>} />
              <Route exact path='/index' element={<Index searchTerm={searchTerm} googleData={googleData}/>} />
          </Routes>
    </>
  )
}

export default App
