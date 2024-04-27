import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase.config';
import Spinner from '../components/Spinner';
import shareIcon from '../assets/svg/shareIcon.svg';
import { toast } from 'react-toastify';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [sharedLinkCopied, setSharedLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', params.productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
        setLoading(false);
      }
    };

    fetchProduct();
  }, [navigate, params.productId]);

  if (loading) {
    return <Spinner />;
  }

  const {
    collectionName,
    imgUrls,
    name,
    description,
    offer,
    discountedPrice,
    regularPrice,
    benefits,
  } = product || {};

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setSharedLinkCopied(true);
    toast.success('Link copied');
  };

  return (
    <div className="product">
      <div className="product-container">
        <div className="product-link">
          {offer && <p className="offer">Special Offer!</p>}
          <img src={shareIcon} alt="Share Icon" onClick={copyLink} />
        </div>

        <div className="product-image">
          <div className="image-wrapper">
            <img src={imgUrls[0]} alt={name} />
          </div>
        </div>
        <div className="product-info">
          <div className="tags">
            <p>Anti-Wrinkles</p>
            <p>Firming</p>
            <p>Lifting</p>
          </div>
          <h3>{name}</h3>
          <p>{description}</p>

          {offer ? (
            <p>
              $ {discountedPrice} <span className="was">$ {regularPrice}</span>
            </p>
          ) : (
            <p>$ {regularPrice}</p>
          )}
          <div className="benefits"></div>
        </div>
        <Link onClick={() => navigate(-1)}>
          Go Back to {collectionName} Collection
        </Link>
      </div>
    </div>
  );
};

export default Product;
