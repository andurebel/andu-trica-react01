import Products from './Products';
import Product from './Product';
import SearchResults from './SearchResults';

const componentMap = {
  home: Products,
  productPage: Product,
  searchResults: SearchResults,
};

export const Screen = ({ screen = 'home' }) => {
  if (!screen || typeof componentMap[screen] === 'undefined') {
    return <componentMap.home></componentMap.home>;
  }
  const CurrentComponent = componentMap[screen];
  return <CurrentComponent />;
};

export default Screen;
