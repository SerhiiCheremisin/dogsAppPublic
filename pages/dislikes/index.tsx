import React, { useEffect, useState } from 'react';
import { getData, getOneImage} from '../../services/api';

//components
import Breadcrumb from '../../components/Breadcrumb';
import NavBar from '../../components/NavBar/NavBar';
import Logs from '../../components/voting/Logs';
import GridImages from '../../components/voting/GridImages';
import NoData from '../../components/NoData';
import LoadingSpinner from '../../components/LoadingSpinner';
import { singleMapImage } from '../../types/propsTypes';

const DislikePage = ():JSX.Element => {
  const [dislikes, setDisLikes] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageProps, setImageProps] = useState<singleMapImage[]>([]);


  useEffect(() => {
    getData('/votes')
    .then(data => {
      const filteredState = data.data.filter( (el:any) => el.value === 0);
      setDisLikes(filteredState);
    })
   }, [])

   useEffect( () => {
    const images : singleMapImage[] = [];
    dislikes.map( (el:any) => {
      getOneImage(`/${el.image_id}`)
      .then( data => {
        const obj:singleMapImage = {
          url: data?.data.url,
          id: el.id,
          name:'',
        }
        images.push(obj);
      })
      .then( () => {
        setImageProps(images);
        setIsLoading(false);
      })
    })
   }, [dislikes])

 
  if (isLoading) {
    return(
      <>
      <NavBar/>
      <Breadcrumb/>
      <LoadingSpinner/>
      </>
    )
  }

   return (
    <div>
        <NavBar/>
        <Breadcrumb/>
        { dislikes.length === 0 ? 
        <NoData/> :
        <>
        <GridImages images={imageProps}/>
        <Logs/>
        </>
         }
       
    </div>
  )
}

export default DislikePage;
