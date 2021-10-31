import { useContext } from 'react';
import { AppContext } from './../contexts/AppContext';
import Logo from './Logo';

export const FooterNav = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  const cleanUpState = () => {
    dispatch({
      type: 'setSelected',
      payload: null,
    });

    dispatch({
      type: 'setSearchResults',
      payload: [],
    });
  };

  const navigateHome = () => {
    dispatch({
      type: 'setScreen',
      payload: 'home',
    });

    cleanUpState();
  };

  const navigateToCart = () => {
    dispatch({
      type: 'setScreen',
      payload: 'cart',
    });

    cleanUpState();
  };

  return (
    <ul className="list-group col-md-3 list-unstyled d-inline-flex">
      <li className="list-group-item text-center">
        <button
          className="btn-link p-0 border-0 bg-transparent "
          title="Home"
          type="button"
          onClick={navigateHome}
        >
          Home
        </button>
      </li>

      <li className="list-group-item text-center">
        <Logo />
      </li>

      {cart.length > 0 ? (
        <li className="list-group-item text-center ">
          <button
            className="btn-link p-0 border-0 bg-transparent"
            type="button"
            title="Cart"
            onClick={navigateToCart}
          >
            Cart
          </button>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
};

export default FooterNav;
