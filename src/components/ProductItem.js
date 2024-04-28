import { Link } from 'react-router-dom';

const ProductItem = ({ product, id }) => {
  const {
    collectionName,
    imgUrls,
    name,
    benefits,
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
        <ul className="benefits-wrapper">
          {benefits.map((benefit, index) => (
            <li key={index} className="product-benefits">
              {benefit}
            </li>
          ))}
        </ul>
        {offer && <p className="offer">Special Offer!</p>}
        <p>$ {formattedPrice}</p>
      </Link>
    </li>
  );
};

export default ProductItem;
