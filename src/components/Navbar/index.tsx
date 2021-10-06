import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' >
            Home
          </NavLink>
          <NavLink to='/about' > 
          {/* activeStyle */}
            About
          </NavLink>
          <NavLink to='/team' >
            Team
          </NavLink>
          <NavLink to='/egg' >
            Easter Egg
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar;