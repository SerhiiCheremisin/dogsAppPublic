import React, { useEffect, useState } from 'react';
import { getData, getOneImage} from '../../services/api';
import { singleMapImage } from '../../types/propsTypes';

//components
import Breadcrumb from '../../components/Breadcrumb';
import NavBar from '../../components/NavBar/NavBar';
import Logs from '../../components/voting/Logs';
import GridImages from '../../components/voting/GridImages';
import NoData from '../../components/NoData';
import LoadingSpinner from '../../components/LoadingSpinner';
import Head from 'next/head';
import RightBlock from '../../components/RightBlock';

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
    <Head>
      <title>Dislike page</title>
      <meta name="description" content={`This dislike page. Check details below`}/>
    </Head>
      <NavBar/>
      <Breadcrumb/>
      <LoadingSpinner/>
      </>
    )
  }

   return (
    <>
    <Head>
      <title>Dislike page</title>
      <meta name="description" content={`This dislike page. Check details below`}/>
    </Head>
      <NavBar/>
      <div>
       <RightBlock type ={'float'} color={'alt'}>
        <Breadcrumb/>
        { 
        dislikes.length === 0 ? 
        <NoData/> :
        <>
        <GridImages images={imageProps}/>
        <Logs/>
        </>
         }
       </RightBlock>
    </div>
    </>
  )
}

export default DislikePage;
