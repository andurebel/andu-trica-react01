import { Component, Fragment } from 'react';
import Film from './components/Film';
import Films from './components/Films';
import PurchaseFilm from './components/PurchaseFilm';
import Search from './components/Search';
import Films from './components/Films';
import SearchCharacters from './components/SearchCharacters';
import Characters from './components/Characters';

const baseUrl = 'https://swapi.dev/api/films';
const charactersUrl = 'https://swapi.dev/api/people/';

class App extends Component {
  state = {
    busy: true,
    films: [],
<<<<<<< HEAD
    characters: [],
=======
    errorMessage: '',
    hasSearchResults: false,
    selectedFilm: null,
    purchasing: false,
>>>>>>> temp-work
  };

  getFilms() {
    this.setState({
      busy: true,
    });

    // promise chaining
    return fetch(baseUrl)
      .then((response) => {
        if (response.status === 404) {
          throw new Error('404');
        }

        return response.json();
      })
      .then(({ results }) => {
        this.setState({
          films: results,
          busy: false,
        });
      })
      .catch((_) => {
        this.setState({
          errorMessage: 'An error has occured.',
          busy: false,
        });
      });
  }

<<<<<<< HEAD
  getCharacters() {
    this.setState({
      busy: true,
=======
  clearSearchResults() {
    this.getFilms().then(() => {
      this.setState({
        hasSearchResults: false,
      });
>>>>>>> temp-work
    });

    fetch(charactersUrl)
      .then((response) => {
        return response.json();
      })
      .then(({ results }) => {
        this.setState({
          characters: results,
          busy: false,
        });
      });
  }

  renderFilms() {
    return (
      <>
        <h2>Available films</h2>
        <Films films={this.state.films} />
      </>
    );
  }

  renderCharacters() {
    return (
      <>
        <h2>Characters</h2>
        <Characters characters={this.state.characters} />
      </>
    );
  }

  renderFilms() {
    return (
      <>
        <h2>Available films</h2>

        <Films
          films={this.state.films}
          selectFilm={(film) => {
            this.setState({
              selectedFilm: film,
            });
          }}
          purchaseFilm={(film) => {
            this.setState({
              selectedFilm: film,
              purchasing: true,
            });
          }}
        ></Films>
        {this.state.hasSearchResults ? (
          <button
            className="btn btn-warning text-white"
            title="See all movies"
            type="button"
            onClick={() => {
              this.clearSearchResults();
            }}
          >
            See all movies
          </button>
        ) : (
          <></>
        )}
      </>
    );
  }

  renderFilm() {
    return (
      <Film
        film={this.state.selectedFilm}
        deselectFilm={() => {
          this.setState({
            selectedFilm: null,
          });
        }}
      ></Film>
    );
  }

  renderMainScreen() {
    if (this.state.busy === true) {
      return <>... loading</>;
    }

    if (this.state.busy === false && this.state.errorMessage.length > 0) {
      return <>{this.state.errorMessage}</>;
    }

    if (this.state.purchasing === true) {
      return <PurchaseFilm film={this.state.selectedFilm}></PurchaseFilm>;
    }

    return this.state.selectedFilm !== null
      ? this.renderFilm()
      : this.renderFilms();
  }

  renderCharactersScreen() {
    if (this.state.busy === true) {
      return <>Loading...</>;
    }
    return this.renderCharacters();
  }

  componentDidMount() {
    this.getFilms();
    this.getCharacters();
  }

  render() {
    return (
      <Fragment>
        <header className="navbar-expand-md navbar-dark fixed-top bg-dark">
          <nav className="container d-flex justify-content-between">
            <h1 className="display-6 text-warning">Swapi Cinema</h1>
<<<<<<< HEAD

=======
>>>>>>> temp-work
            <Search
              onSearchResults={(films) => {
                this.setState({
                  films,
<<<<<<< HEAD
                });
              }}
            ></Search>
            <SearchCharacters
              onSearchResults={(characters) => {
                this.setState({
                  characters,
                });
              }}
            />
=======
                  hasSearchResults: true,
                  selectedFilm: null,
                });
              }}
              placeholder="Choose a SW movie"
            ></Search>
>>>>>>> temp-work
          </nav>
        </header>

        <main className="container mt-5 pt-5">{this.renderMainScreen()}</main>
        <section className="container mt-5 pt-5">
          {this.renderCharactersScreen()}
        </section>
      </Fragment>
    );
  }
}

export default App;
