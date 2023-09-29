import { useState } from 'react'
import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import { Routes,Route,useNavigate} from 'react-router-dom'
import { searchData } from './API/googleSearch'
import Index from './Components/searchPage/Index'


function App() {
  const navigate = useNavigate()
  const [searchTerm,setSearchTerm] = useState('')           //searching term in the app must be passed as props to body and index page where the search results appears
  const [googleData,setGoogleData] = useState({})           

  const setSearch = async (term)=>{                        
    setSearchTerm(term)
    const data = await searchData(term)                //setSearch function will make the API call from googleSearch.jsx inside API folder
    setGoogleData(data)
    navigate('/index')                              //Automatic redirect to index once data is set to googleData
  }


  return (
    <>
          <Routes>
              <Route exact path='/' element={<><Navbar /><Body setSearch={setSearch}/></>} />
              <Route exact path='/index' element={<Index searchTerm={searchTerm} googleData={googleData} />} />
             
          </Routes>
    </>
  )
}

export default App
