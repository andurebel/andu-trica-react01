import React, { useReducer } from 'react';
import Search from './legacy/Search';
import Screen from './components/Screen';
import { AppContext } from './contexts/AppContext';
import { appStateReducer, appState } from './contexts/AppContext';

const App = () => {
  const [state, dispatch] = useReducer(appStateReducer, appState);

  const contextValue = {
    state: state,
    dispatch: dispatch,
  };

  const { currentScreen } = state;

  return (
    <AppContext.Provider value={contextValue}>
      <header className="navbar-dark fixed-top bg-dark border-bottom border-warning">
        <nav className="container d-flex justify-content-between">
          <h1 className="display-6 text-warning">Swapi vehicles</h1>
          <Search />
        </nav>
      </header>

      <main className="container mb-4 mt-7">
        <button
          onClick={() => {
            dispatch({ type: 'setScreen', payload: 'productPage' });
          }}
        >
          to products
        </button>
        <Screen screen={currentScreen} />
      </main>

      <footer className="container mb-4">Footer</footer>
    </AppContext.Provider>
  );
};

export default App;
