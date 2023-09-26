import './Navbar.css'

const Navbar = () => {

const gmail = () =>{
    window.open('https://www.google.com/gmail/', '_blank');
}

const images = () =>{
    window.open('https://www.google.com/imghp?hl=en&ogbl','_blank')
}

const menu = () =>{
    window.open('https://about.google/products/','_blank')
}
    
  return (
    <>
        <div className='nav'>
                <div style={{cursor: "pointer"}} onClick={gmail}>
                    Gmail
                </div>
                <div style={{cursor: "pointer"}} onClick={images}>
                    Images
                </div>
                <img style={{cursor: "pointer"}} onClick={menu} className='dot-menu' src='Images/dots-menu.png' alt='menu`'></img>
                <button style={{cursor: "pointer"}} onClick={gmail} className='sign-in-button'>
                    Sign in
                </button>
        </div>
    </>
  )
}

export default Navbar