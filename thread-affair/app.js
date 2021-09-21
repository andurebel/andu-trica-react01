const ADD_TO_CART_EVENT = 'cart:add';

const REMOVE_FROM_CART_EVENT = 'cart:remove';

const ADD_TO_WISHLIST_EVENT = 'wl:add';

const REMOVE_FROM_WISHLIST_EVENT = 'wl:remove';

class NewsletterForm extends React.Component {
  // v1
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

  // handleSubmit
  onSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;

    if (!this.validateEmail(email)) {
      this.setState({
        inputMessage: 'Please use a valid email',
      });

      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        email: '',
        submittedValue: this.state.email,
        submitted: true,
      });
    }, 3000);
  };

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.submitted === true ? (
          <div className="container">
            Hello {this.state.submittedValue}, thank you for submiting.
          </div>
        ) : (
          <form onSubmit={this.onSubmit} className="form-newsletter container">
            <label htmlFor="field-newsletter">
              Subscribe to our <span>newsletter</span>
            </label>

            <div>
              <input
                type="text"
                name="field-newsletter"
                id="field-newsletter"
                value={this.state.email}
                onChange={this.onInputChange}
                placeholder="enter your email address to receive the latest news!"
              ></input>

              {this.state.inputMessage.length > 0 ? (
                <div className="message">{this.state.inputMessage}</div>
              ) : null}
            </div>

            <button
              type="submit"
              title="Subscribe"
              disabled={this.state.busy}
              className={`${this.state.busy === true ? 'busy' : ''}`}
            >
              {this.state.busy ? (
                <i className="fas fa-spinner icon"></i>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        )}
      </div>
    );
  }
}

const newsletterContainer = document.querySelector('.home-newsletter');
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);

class AddToCartButton extends React.Component {
  // v1
  state = {
    added: false,
    busy: false,
  };

  onClick = () => {
    if (this.state.busy === true) {
      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      dispatchEvent(
        new CustomEvent(
          this.state.added ? REMOVE_FROM_CART_EVENT : ADD_TO_CART_EVENT,
          {
            detail: {
              productId: this.props.productId,
            },
          },
        ),
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
        className={`product-control ${
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
  // v2
  constructor(props) {
    super(props);

    this.state = {
      added: false,
      busy: false,
    };
  }

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
    var { added, busy } = this.state;
    var className =
      'product-control' +
      ' ' +
      (added ? 'active' : '') +
      ' ' +
      (busy ? 'busy' : '');

    return (
      <button
        className={className}
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
  render() {
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

class HeaderCounters extends React.Component {
  state = {
    cartItemsCount: 0,
    wishlistItemsCount: 0,
    cartItems: [],
    wishlistItems: [],
  };

  showProducts(collectionName) {
    alert(this.state[collectionName]);
  }

  productCartAction = (event) => {
    const { productId } = event.detail;
    const eventType = event.type;
    let { cartItemsCount } = this.state;

    switch (eventType) {
      case ADD_TO_CART_EVENT:
        cartItemsCount++;
        break;
      case REMOVE_FROM_CART_EVENT:
        cartItemsCount--;
        break;
    }

    this.setState({
      cartItemsCount,
    });
  };

  componentDidMount() {
    addEventListener(ADD_TO_CART_EVENT, this.productCartAction);
    addEventListener(REMOVE_FROM_CART_EVENT, this.productCartAction);
  }

  render() {
    const { wishlistItemsCount, cartItemsCount } = this.state;

    return (
      <React.Fragment>
        <div className="header-counter">
          <span className="qty">{wishlistItemsCount}</span>
          <i
            className="fas fa-heart icon"
            onClick={() => {
              this.showProducts('wishlistItemsCount');
            }}
          ></i>
        </div>

        <div className="header-counter">
          <span className="qty">{cartItemsCount}</span>
          <i
            className="fas fa-shopping-cart icon"
            onClick={() => {
              this.showProducts('cartItemsCount');
            }}
          ></i>
        </div>
      </React.Fragment>
    );
  }
}

const headerCounters = document.querySelector('.header-counters');

ReactDOM.render(<HeaderCounters></HeaderCounters>, headerCounters);
