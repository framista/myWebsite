import React, { useReducer } from 'react';
import NavbarReducer from './reducer';
import NavbarContext from './context';
import { TOOGLE_NAVBAR, CLOSE_NAVBAR } from '../types';

const NavbarState = (props) => {
  const initialState = {
    navbarOpen: false,
  };
  const [state, dispatch] = useReducer(NavbarReducer, initialState);

  const closeNavbar = () => dispatch({ type: CLOSE_NAVBAR });
  const toogleNavbar = () => dispatch({ type: TOOGLE_NAVBAR });

  return (
    <NavbarContext.Provider
      value={{ navbarOpen: state.navbarOpen, closeNavbar, toogleNavbar }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;
