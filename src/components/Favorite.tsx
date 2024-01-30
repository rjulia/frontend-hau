'use client';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { fetchUpdateFav } from '@/lib/store/slices/favSlice';
import { AppDispatch, RootState } from '@/lib/store/store';

type FavoriteProps = {
  id: number;
};

const Favorite: React.FC<FavoriteProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const userId= useSelector<RootState>((state) => state.auth.user._id, _.isEqual) as string;
  const favorites = useSelector<RootState>((state) => state.userFav.favorites, _.isEqual) as number[];
  const [isFavorite, setIsFavorite] = useState(false);
  

  const toggleFavorite = () => {
    if (isFavorite) {
      const favToUpdate = favorites.filter((favId: number) => favId !== id) as number[];
      dispatch(fetchUpdateFav({
        userId,
        characterIds: favToUpdate,
      }));
    } else {
      dispatch(fetchUpdateFav({
        userId,
        characterIds: [...favorites, id],
      }))
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (favorites) {
      setIsFavorite(_.includes(favorites, id));
    }
  }, [id, favorites]);



  return (
    <button onClick={toggleFavorite}>
      {isFavorite ?  <MdFavorite className='icon' size={'30px'}/> : <MdFavoriteBorder className='icon' size={'30px'}/>}
    </button>
  );
};

export default Favorite;
