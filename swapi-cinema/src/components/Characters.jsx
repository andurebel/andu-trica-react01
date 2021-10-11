import { Component } from 'react';

class Characters extends Component {
  renderCharacters() {
    if (this.props.characters.length <= 0) {
      return <p>No characters found</p>;
    }

    return this.props.characters.map((character, index) => {
      const { name, gender } = character;

      return (
        <article
          key={index}
          className="col-6 col-md-3 p-4 mb-2 d-flex flex-column"
        >
          <header>
            <h6 className="text-warning text-left">{name}</h6>
            <h6 className="text-gray text-left">{gender}</h6>
          </header>

          <section className="d-flex justify-content-between">
            <button
              className="btn btn-sm btn-light"
              type="button"
              title={`View details about ${name}`}
            >
              Details
            </button>
          </section>
        </article>
      );
    });
  }
  render() {
    return <section className="row">{this.renderCharacters()}</section>;
  }
}

export default Characters;
