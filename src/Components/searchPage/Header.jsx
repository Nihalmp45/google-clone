import './header.css'
import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';



const Header = ({searchTerm}) => {
  const navigate=useNavigate()
  const [term, setTerm] = useState('');

  useEffect(() => {                      //on rendering of the app searchTerm is set 
    setTerm(searchTerm);                
    // eslint-disable-next-line        
  }, []);

  const clearTerm = () => {
    setTerm('');
  };

  //   handle submit
  const handleSubmit = (e) => {
    handleSearch();
  };

  

  //   handle search
  const handleSearch = () => {
    if ( 
      searchTerm !== term.trim() &&                      //regular expressions(regex) to prevent blank form submission
      (/^[a-zA-Z0-9].*/.test(term.trim()) ||                 
        /^[a-zA-Z0-9]+[" "]/.test(term.trim()) ||
        /^[" "]+[a-zA-Z0-9]/.test(term.trim()))
    ) {
      setSearch(term.trim());
    }
    else{
      navigate('/')            //will be redirected back to home page on blank form submission
    }
  };

  return (
      <>
        <div className="search-page-header">
          <div className="col-md-12">
            <nav className="navbar py-3">
              <Link to="/" className="navbar-brand">
                <img
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                  alt="Google Logo"
                  height={50}
                  className="image-fluid ml-5"
                />
              </Link>
              <div className="search-box col-md-5 border  justify-content-between align-items-center">
                <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                  <input
                    type="text"
                    name="term"
                    id="term"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                </form>
                {term ? (
                  <i className="fa fa-close" onClick={() => clearTerm()}></i>
                ) : (
                  ''
                )}
                
              </div>

            </nav>
          </div>
        </div>
      </>
  
  
  
  )
};

export default Header