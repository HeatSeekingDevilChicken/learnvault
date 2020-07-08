import React, { useState, useEffect } from 'react';

import Collection from './Collection';

const MyCollections = ({ username }) => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    fetch(`/api/collections/user/${username}`)
      .then((res) => res.json())
      .then((result) => {
        console.log('fetching collections from: ', username);
        setCollections(result);
      });
  }, []);

  return (
    <div>
      <h1>{`${username}'s Collections`}</h1>
      {collections[0] !== undefined ? (
        collections.map((collection) => (
          <Collection
            key={collection._id}
            id={collection._id}
            title={collection.title}
            description={collection.description}
            author={collection.author}
            likes={collection.likes}
          />
        ))
      ) : (
        <li> No Collections Found</li>
      )}
    </div>
  );
};

export default MyCollections;
