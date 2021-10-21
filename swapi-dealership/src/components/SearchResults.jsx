import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ProductTile from './ProductTile';

export const SearchResults = () => {
  const { state, dispatch } = useContext(AppContext);
  const { searchResults } = state;

  const renderResults = () => {
    return searchResults.map((product) => {
      return <ProductTile product={product} key={product.name} />;
    });
  };
  return (
    <section className="row">
      <header className="col-12 mb-2">
        <h2>Search results</h2>
      </header>
      {renderResults()}

      <div className="col-12 mt-2 text-center">
        <button className="btn btn-outline-warning" title="back" type="button">
          Back
        </button>
      </div>
    </section>
  );
};

export default SearchResults;
