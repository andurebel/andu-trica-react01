import { useContext } from 'react';
import { AppContext } from './../contexts/AppContext';


export const ProductTile = ({ product, productInCart }) => {
  const { name, model } = product;
  const { dispatch } = useContext(AppContext);

  const navigateToPdp = () => {
    dispatch({
      type: 'setScreen',
      payload: 'productPage',
    });

    dispatch({
      type: 'setSelected',
      payload: product,
    });
  };

  return (
    <article className="col-6 col-md-3 mb-6 d-flex flex-column">
      <header className="flex-grow-1 text-center mb-4">
        <h5 className="text-warning text-left">{name}</h5>
        <div className="img-responsive bg-secondary">
          <p className="py-5">I have no image, sorry :(</p>
          <img
            height="200"
            width="200"
            src="https://i.pinimg.com/originals/da/8c/21/da8c2163061be58d770f6f9af78258e8.png"
            alt="sad"
          />
        </div>
        <h6>({model})</h6>

        {/* <MetaImage term={name}></MetaImage> */}
      </header>

      <section className="mt-2 text-center">
        <button
          className="btn btn-warning"
          title={`Details for ${name}`}
          type="button"
          onClick={navigateToPdp}
        >
          Details
        </button>
        <div className="pt-2">
          {productInCart ? (
            <i class="far fa-cart-plus text-primary"></i>
          ) : (
            <i className="fas fa-shopping-cart text-secondary"></i>
          )}
        </div>
      </section>
    </article>
  );
};

export default ProductTile;
