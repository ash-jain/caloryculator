// import { useState } from 'react';

import '../css/navbar.css';

function Navbar() {

  // const [isLoggedIn, setLogIn] = useState(false);

  return (
    <nav className='navbar'>
      <section className='navbar-left'>
        <section className='navbar-logo'>{process.env.REACT_APP_TITLE}</section>
      </section>
      {/* <section className='navbar-center'>
        { isLoggedIn ? 
        ( <> 
            Okay, you are good to go 
          </> 
        ) :
        (
          <>
            <button>Log-In</button>
            <button>Sign-Up</button>
          </>
        ) }
      </section>
      <button className='hamburger-btn'>
      </button> */}
    </nav>
  )
};

export default Navbar;
