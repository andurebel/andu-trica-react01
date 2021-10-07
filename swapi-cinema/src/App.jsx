import { Component, Fragment } from 'react';
import Search from './components/Search';
import Films from './components/Films';

const baseUrl = 'https://swapi.dev/api/films';

class App extends Component {
  state = {
    films: [],
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

  renderFilms() {
    return (
      <>
        <h2>Available films</h2>
        <Films films={this.state.films} />
      </>
    );
  }

  renderMainScreen() {
    if (this.state.busy === true) {
      return <>Loading...</>;
    }
    return this.renderFilms();
  }

  componentDidMount() {
    this.getFilms();
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
          </nav>
        </header>

        <main className="container mt-5 pt-5">{this.renderMainScreen()}</main>
      </Fragment>
    );
  }
}

export default App;
