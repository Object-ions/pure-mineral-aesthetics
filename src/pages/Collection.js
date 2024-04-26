import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '../Firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import ProductItem from '../components/ProductItem';

export const Collection = () => {
  const [collectionProducts, setCollectionProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const collectionRef = collection(db, 'products');

        const q = query(
          collectionRef,
          where('collectionName', '==', params.collectionName),
          limit(10)
        );

        const querySnap = await getDocs(q);

        const products = [];

        querySnap.forEach((doc) => {
          products.push({ id: doc.id, data: doc.data() });
        });

        setCollectionProducts(products);
        setLoading(false);
      } catch (error) {
        toast.error('Could not fetch the collection');
        setLoading(false);
      }
    };

    fetchCollection();
  }, [params.collectionName]);

  return (
    <div>
      <h1>{params.collectionName} Collection</h1>
      {loading ? (
        <Spinner />
      ) : collectionProducts.length > 0 ? (
        <>
          <main>
            <ul>
              {collectionProducts.map((product) => (
                <ProductItem
                  product={product.data}
                  id={product.id}
                  key={product.id}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No products exists for {params.collectionName}</p>
      )}
      <div>
        <Link to="/collections">Go back to all collections</Link>
      </div>
    </div>
  );
};

export default Collection;
