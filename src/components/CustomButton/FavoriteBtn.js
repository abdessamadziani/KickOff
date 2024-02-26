import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../reducers';

 const FavoriteBtn = ({match_id,urls,names,date,time} ) => {

  
  const dispatch = useDispatch();
  const favorites = useSelector((state) =>state.favorite.value);

  console.log('**********************',favorites)
  
   const isFavorite = favorites.some((fav) => fav.id === match_id);
   
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
        
    if (isFavorite) {
       dispatch(removeFavorite(favorites.filter((fav) => fav.id !== match.id)));
    } else {
    //    dispatch(addFavorite([...favorites,match_id,urls,names,date,time]));
        dispatch(addFavorite([...favorites, {
        id: match_id,
        urls: urls,
        names: names,
        date: date,
        time: time
      }]));

      console.log('favorite',favorites)
      
    }
    setIsClicked(!isClicked);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon
         name={isFavorite ? 'heart' : 'heart-outline'}
        //   name={'heart'}


        size={30}
        color={ 'red'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteBtn;