import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>this is product components</h2>
      <h5>Current user is: {user ? user.displayName : 'Nobody'}</h5>
    </div>
  );
};

export default Products;
