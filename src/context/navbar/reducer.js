import { TOOGLE_NAVBAR, CLOSE_NAVBAR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOOGLE_NAVBAR:
      return {
        ...state,
        navbarOpen: !state.navbarOpen,
      };
    case CLOSE_NAVBAR:
      return {
        ...state,
        navbarOpen: false,
      };
    default:
      return state;
  }
};
