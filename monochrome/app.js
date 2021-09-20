class SignUpNewsletter extends React.Component {
  //state
  state = {
    email: '',
    inputMessage: '',
    busy: false,
    submitted: false,
    submittedValue: '',
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //handle submit

  onSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;

    if (!this.validateEmail(email)) {
      this.setState({
        inputMessage: 'Please enter a valid email',
      });

      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        email: '',
        busy: false,
        submittedValue: this.state.email,
        submitted: true,
      });
    }, 2000);
  };

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <div className="container">
            Hi {this.state.submittedValue} , thanks for signing up to our
            newsletter!
          </div>
        ) : (
          <form onSubmit={this.onSubmit} className="footer-sign-up-newsletter">
            <label htmlFor="email-newsletter">Sign up for our newsletter</label>
            <input
              type="email"
              name="email"
              id="email-newsletter"
              value={this.state.email}
              onChange={this.onInputChange}
              placeholder="Enter email address here..."
            ></input>
            <button
              type="submit"
              title="Submit"
              disabled={this.state.busy}
              className={`${this.state.busy ? 'busy' : ''}`}
            >
              {this.state.busy ? (
                <i className="fas fa-spinner icon"></i>
              ) : (
                'Sign Up now'
              )}
            </button>
          </form>
        )}
      </div>
    );
  }
}

const signUpContainer = document.querySelector('.footer-sign-up-newsletter');
ReactDOM.render(<SignUpNewsletter></SignUpNewsletter>, signUpContainer);

class AddToCartButton extends React.Component {
  state = {
    added: false,
    busy: false,
  };

  onClick = () => {
    if (this.state.busy) {
      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      dispatchEvent(
        new CustomEvent('cart:add', {
          detail: this.props.productId,
        }),
      );

      this.setState({
        busy: false,
        added: !this.state.added,
      });
    }, 1000);
  };

  render() {
    return (
      <button
        className={`product-tile-controls ${
          this.state.added === true ? 'active' : ''
        } ${this.state.busy === true ? 'busy' : ''}`}
        type="button"
        title={this.state.added === true ? 'Remove from Cart' : 'Add to Cart'}
        onClick={this.onClick}
      >
        <span>
          {this.state.added === true
            ? `PID: ${this.props.productId} in cart`
            : 'Add to cart'}
        </span>
        <i className="fas fa-spinner icon"></i>
      </button>
    );
  }
}

class AddToWishlistButton extends React.Component {
  state = {
    added: false,
    busy: false,
  };

  onClick = () => {
    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        added: !this.state.added,
      });
    }, 1000);
  };

  render() {
    const { added, busy } = this.state;
    let ClassName =
      'product-tile-controls ' +
      ' ' +
      (added ? 'active' : '') +
      ' ' +
      (busy ? 'busy' : '');

    return (
      <button
        className={ClassName}
        type="button"
        onClick={this.onClick}
        title={added === true ? 'Remove from Wishlist' : 'Add to Wishlist'}
        disabled={busy}
      >
        <span>
          <i className={added === true ? 'fas fa-heart' : 'far fa-heart'}></i>
        </span>
        <i className="fas fa-spinner icon"></i>
      </button>
    );
  }
}

class ProductControls extends React.Component {
  render(props) {
    const productId = this.props.productId;

    return [
      <AddToCartButton key="321" productId={productId}></AddToCartButton>,
      <AddToWishlistButton
        key="123"
        productId={productId}
      ></AddToWishlistButton>,
    ];
  }
}

const productTileControls = document.querySelectorAll('.product-tile-controls');

productTileControls.forEach((productTileControl, index) => {
  ReactDOM.render(
    <ProductControls key={index} productId={index}></ProductControls>,
    productTileControl,
  );
});
