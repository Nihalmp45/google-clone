import Header from './Header'
import Search from './Search'


//Index page is the search result Page where header component and search component where result area is located

const Index = ({searchTerm,googleData}) => { 

  return ( 
    <>
        <Header searchTerm={searchTerm} googleData={googleData} />          
        <Search googleData={googleData}/>
        
    </>
  )
}

export default Index