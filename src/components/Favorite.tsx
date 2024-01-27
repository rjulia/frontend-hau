'use client';

import React, { useState } from 'react';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

type FavoriteProps = {
  id: number;
};

const Favorite: React.FC<FavoriteProps> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ?  <MdFavorite className='icon' size={'30px'}/> : <MdFavoriteBorder className='icon' size={'30px'}/>}
    </button>
  );
};

export default Favorite;
