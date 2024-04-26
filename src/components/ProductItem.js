import { Link } from 'react-router-dom';

const ProductItem = ({ product, id }) => {
  const {
    collectionName,
    imgUrls,
    name,
    description,
    offer,
    discountedPrice,
    regularPrice,
  } = product;

  const addComma = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formattedPrice = offer
    ? addComma(discountedPrice)
    : addComma(regularPrice);

  return (
    <li className="collection-card-product">
      <Link to={`/collection/${collectionName}/${id}`}>
        <div className="image-wrapper">
          <img src={imgUrls} alt={name} />
        </div>
        <p className="product-name">{name}</p>
        <hr />
        <p className="product-description">{description}</p>
        {offer && <p className="offer">Special Offer!</p>}
        <p>$ {formattedPrice}</p>
      </Link>
    </li>
  );
};

export default ProductItem;
