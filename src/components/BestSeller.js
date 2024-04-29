import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    imageUrl:
      'https://www.laprairie.com/dw/image/v2/AAOT_PRD/on/demandware.static/-/Sites-masterCatalog_LaPrairie/default/dw2664dca3/images/products/95790-01363-97/PEARL-INFUSION_SL_c.png?sw=438&sh=438&sm=fit',
    title: 'WHITE CAVIAR PEARL INFUSION',
    benefits: ['BRIGHTENING', 'FIRMING', 'EVEN-SKIN'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    price: '$770',
  },
  {
    id: 2,
    imageUrl:
      'https://www.laprairie.com/dw/image/v2/AAOT_PRD/on/demandware.static/-/Sites-masterCatalog_LaPrairie/default/dw72c6184c/images/products/95790-01339-46/WHITE-CAVIAR-ESSENCE-EXTRAORDINAIRE_SL_c.png?sw=438&sh=438&sm=fit',
    title: 'WHITE CAVIAR ESSENCE',
    benefits: ['BRIGHTENING', 'FIRMING', 'EVEN-SKIN'],
    description:
      'Lorem ipsum dolor, Excepturi mollitia quas sint beatae obcaecati',
    price: '$460',
  },
  {
    id: 3,
    imageUrl:
      'https://www.laprairie.com/dw/image/v2/AAOT_PRD/on/demandware.static/-/Sites-masterCatalog_LaPrairie/default/dwcda0c242/images/products/95790-01269-09/WHITE-CAVIAR-CR%C3%88ME-EXTRAORDINAIRE_SL_c.png?sw=438&sh=438&sm=fit',
    title: 'WHITE CAVIAR CRÈME',
    benefits: ['BRIGHTENING', 'FIRMING', 'EVEN-SKIN'],
    description: 'Lorem ipsum dolor ipsa iure vero deleniti',
    price: '$840',
  },
];

const BestSeller = () => {
  return (
    <div className="best-seller">
      <div className="best-seller-container">
        {products.map((product) => (
          <div key={product.id} className="best-seller-card">
            <div className="image-wrapper">
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <hr />
            <ul className="benefits">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
        <Link to="/collections" className="btn">
          Check Out Our Best Sellers
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
