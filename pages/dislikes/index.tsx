import React, { useEffect, useState } from 'react';
import { getData, getOneImage} from '../../services/api';
import styles from '../../styles/sharedStyles.module.css';
import { singleMapImage } from '../../types/propsTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { backgroungColorAlt } from '../../services/common';

//components
import Breadcrumb from '../../components/Breadcrumb';
import NavBar from '../../components/NavBar/NavBar';
import Logs from '../../components/voting/Logs';
import GridImages from '../../components/voting/GridImages';
import NoData from '../../components/NoData';
import LoadingSpinner from '../../components/LoadingSpinner';
import Head from 'next/head';

const DislikePage = ():JSX.Element => {
  const [dislikes, setDisLikes] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageProps, setImageProps] = useState<singleMapImage[]>([]);

  const theme = useSelector( (state:RootState) => state.appReducer.isDarkTheme);


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
       <div style={backgroungColorAlt(theme)}  className={styles.rightWrapper}>
        <Breadcrumb/>
        { 
        dislikes.length === 0 ? 
        <NoData/> :
        <>
        <GridImages images={imageProps}/>
        <Logs/>
        </>
         }
       </div>
    </div>
    </>
  )
}

export default DislikePage;
