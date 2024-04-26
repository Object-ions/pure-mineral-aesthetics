import React from 'react';
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
    <li className="">
      <Link
        to={`/collection/${collectionName}/${id}`}
        className=""
        style={{ background: '#3c3c3c' }}
      >
        <img src={imgUrls} alt={name} className="" style={{ width: '40px' }} />
        <p>{name}</p>
        <hr />
        <p>{description}</p>
        {offer && <p className="offer">Special Offer!</p>}
        <p>$ {formattedPrice}</p>
      </Link>
    </li>
  );
};

export default ProductItem;
