import { useContext } from 'react';
import logo from '../img/Logo.PNG';
import { AppContext } from './../contexts/AppContext';

export const Logo = () => {
  const { dispatch } = useContext(AppContext);

  const navigateHome = () => {
    dispatch({
      type: 'setScreen',
      payload: 'home',
    });
  };

  return (
    <div>
      <img
        src={logo}
        className="navbar-brand d-inline-block"
        height="100"
        alt="logo"
        onClick={navigateHome}
      />
    </div>
  );
};

export default Logo;
