import React, { useEffect, useState } from 'react';
import { getData, getOneImage} from '../../services/api';
import styles from '../../styles/sharedStyles.module.css';
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
import { singleMapImage } from '../../types/propsTypes';
import Head from 'next/head';

const Likesage = ():JSX.Element => {

  const [likes, setLikes] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageProps, setImageProps] = useState<singleMapImage[]>([]);

  const theme = useSelector( (state:RootState) => state.appReducer.isDarkTheme);

 useEffect(() => {
  getData('/votes')
  .then(data => {
    const filteredState = data.data.filter( (el:any) => el.value === 1);
    setLikes(filteredState);
  })
 }, [])

 useEffect( () => {
  const images : singleMapImage[] = [];
  likes.map( (el:any) => {
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
 }, [likes])


 if (isLoading) {
  return(
    <>
    <Head>
      <title>Likes page</title>
      <meta name="description" content={`This likes page. Check details below`}/>
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
      <title>Likes page</title>
      <meta name="description" content={`This likes page. Check details below`}/>
    </Head>
     <NavBar/>
      <div>
        <div style={backgroungColorAlt(theme)} className={styles.rightWrapper}>
        <Breadcrumb/>
        { imageProps.length === 0 ? 
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

export default Likesage;