import { useEffect } from 'react'
import Header from './Header'
import Search from './Search'
import { useNavigate } from 'react-router-dom'



const Index = ({searchTerm,googleData}) => {
    const navigate = useNavigate()
    console.log(googleData)

    useEffect(()=>{
        if(searchTerm === ''){
            navigate('/')
        }
    },[searchTerm])
  return (
    <>
        <Header searchTerm={searchTerm}/>
        <Search googleData={googleData}/>
        
    </>
  )
}

export default Index