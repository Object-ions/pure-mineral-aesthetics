import { Link, useParams } from 'react-router-dom';

export const Collection = () => {
  const params = useParams();

  return (
    <div>
      {params.collectionName} Collection
      <div>
        <Link to="/products">Go back to all collections</Link>
      </div>
    </div>
  );
};

export default Collection;
