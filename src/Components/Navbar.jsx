import './Navbar.css'

const Navbar = () => {

const gmail = () =>{
    window.open('https://www.google.com/gmail/', '_blank');    //Gmail sign in page will be opened onClick of gmail button
}

const images = () =>{
    window.open('https://www.google.com/imghp?hl=en&ogbl','_blank') //Google Images tab will be opened on click of Images button
}

const menu = () =>{
    window.open('https://about.google/products/','_blank')  //entire product page will be showcased when menu is clicked 
}
    
  return (
    <>
        <div className='nav'>
                <div style={{cursor: "pointer",fontWeight:"300"}} onClick={gmail}>
                    Gmail
                </div>
                <div style={{cursor: "pointer",fontWeight:"300"}} onClick={images}>
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