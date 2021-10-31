import Products from './Products';
import Product from './Product';
import SearchResults from './SearchResults';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';
import NotFound from './NotFound';

const componentMap = {
  home: Products,
  productPage: Product,
  searchResults: SearchResults,
  cart: Cart,
  checkout: Checkout,
  orderConfirmation: OrderConfirmation,
  notFound: NotFound,
};

// props = {screen: 'home'}
// props.screen
// props->screen
export const Screen = ({ screen = '' }) => {
  if (!screen || typeof componentMap[screen] === 'undefined') {
    return <NotFound />;
  }

  const CurrentComponent = componentMap[screen];

  return <CurrentComponent></CurrentComponent>;
};

export default Screen;
