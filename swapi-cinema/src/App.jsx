import { Component, Fragment } from 'react';
import Search from './components/Search';
import Films from './components/Films';
import SearchCharacters from './components/SearchCharacters';
import Characters from './components/Characters';

const baseUrl = 'https://swapi.dev/api/films';
const charactersUrl = 'https://swapi.dev/api/people/';

class App extends Component {
  state = {
    films: [],
    characters: [],
  };

  getFilms() {
    this.setState({
      busy: true,
    });

    //promise chaining
    fetch(baseUrl)
      .then((response) => {
        return response.json();
      })
      .then(({ results }) => {
        this.setState({
          films: results,
          busy: false,
        });
      });
  }

  getCharacters() {
    this.setState({
      busy: true,
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

  renderMainScreen() {
    if (this.state.busy === true) {
      return <>Loading...</>;
    }
    return this.renderFilms();
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

            <Search
              onSearchResults={(films) => {
                this.setState({
                  films,
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
