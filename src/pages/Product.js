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
        <div className="share-icon-div">
          <img src={shareIcon} alt="Share Icon" onClick={copyLink} />
          <p>Share</p>
        </div>
        <div className="product-image">
          <div className="image-wrapper">
            <img src={imgUrls[0]} alt={name} />
          </div>
        </div>
        <div
          className="tags"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <p>Anti-Wrinkles</p>
          <p>Firming</p>
          <p>Lifting</p>
        </div>
        <p>{name}</p>
        <p>{description}</p>
        {offer && <p className="offer">Special Offer!</p>}
        {offer ? <p>$ {discountedPrice}</p> : <p>$ {regularPrice}</p>}
        <div className="benefits">
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <Link onClick={() => navigate(-1)}>Go Back</Link>
      </div>
    </div>
  );
};

export default Product;
