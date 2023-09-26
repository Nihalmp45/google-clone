import { useState } from 'react'
import './Body.css'
import { Navigate } from 'react-router-dom'

const Body = () => {

  const [input,setInput] = useState('')

  const google = () =>{
    window.open('https://www.google.com/','_blank')
  }

  const doodles = () =>{
    window.open('https://www.google.com/doodles', '_blank')
  }

  const handleSubmit =()=>{
    if(input===''){
      Navigate('/')
    }else{
      Navigate('/search') 
    }
  }
  console.log(Navigate)
  return (
    <>
    <div className='body'>
        <img className='google-image' src='Images/google-bg.png' alt='google-image'></img>
        <div className='input-wrapper'>
            <img className='mag-glass' src='Images/search.png' alt='magnifying-image'></img>
            <form onSubmit={handleSubmit}>
            <input type='search' value={input} onChange={(e) =>setInput(e.target.value)}/>
            </form>
            <img className='google-mic' src='Images/Google_mic.png'></img>
            <img className='google-lens' src='Images/Google_Lens.png'></img>
        </div>
      </div>
      <div className='button-items'>
        <button onClick={google} className='button-groups'>Google Search</button>
        <button onClick={doodles} className='button-groups'>I'm Feeling Lucky</button>
      </div>
    </>
  )
}

export default Body