import React, { useEffect, useState } from 'react';
import { getData } from '../../services/api';
import { IFavoriteItem } from '../../types/commonTypes';
import { IGridImagesProps, singleMapImage } from '../../types/propsTypes';

//components
import Breadcrumb from '../../components/Breadcrumb';
import NavBar from '../../components/NavBar/NavBar';
import Logs from '../../components/voting/Logs';
import GridImages from '../../components/voting/GridImages';
import NoData from '../../components/NoData';
import LoadingSpinner from '../../components/LoadingSpinner';


const FavoritePage = ():JSX.Element => {

  const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);
  const [imageValue, setImageValues] = useState<singleMapImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData('/favourites')
    .then (data => {
      const images: singleMapImage[] = [];
      data.data.map( (el:IFavoriteItem) => {
        const obj:singleMapImage = {
          url: el.image.url,
          id: el.id,
          name:'',
        }
        images.push(obj);
      })
      setImageValues(images);
      setFavorites(data.data);
      setIsLoading(false);
    })
  })

  if (isLoading) {
    return(
      <>
      <LoadingSpinner/>
      </>
    )
  }

  return (
    <div>
        <NavBar/>
        <Breadcrumb/>
        { favorites.length === 0 ? 
        <NoData/> :
        <>
        <GridImages images={imageValue}/>
        <Logs/>
        </>
         }
       
    </div>
  )
}

export default FavoritePage;
