import { Component } from 'react';

const baseUrl = 'https://swapi.dev/api/people/';

class SearchCharacters extends Component {
  state = {
    busy: false,
    searchTerm: '',
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState({
      busy: true,
    });

    fetch(`${baseUrl}?search =${this.state.searchTerm}`)
      .then((response) => {
        return response.json();
      })
      .then(({ results: characters }) => {
        this.setState({
          busy: false,
          searchTerm: '',
        });

        this.props.onSearchResults(characters);
      });
  };

  onInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <form
        className="d-inline-flex align-self-center"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-control me-2 align-self-center"
          name="q"
          placeholder="Search characters"
          onChange={this.onInputChange}
          value={this.state.searchTerm}
          disabled={this.state.busy}
          required
        />
        <button
          className="btn btn-outline-warning"
          type="submit"
          title="Search"
          disabled={this.state.busy}
        >
          Character
        </button>
      </form>
    );
  }
}

export default SearchCharacters;
