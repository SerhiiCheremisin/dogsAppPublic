//components
import Breadcrumb from '../../components/Breadcrumb';
import NavBar from '../../components/NavBar/NavBar';
import GalleryFilters from '../../components/gallery/GalleryFilters';
import GridImages from '../../components/voting/GridImages';
import UploadPortal from '../../components/gallery/UploadPortal';

import styles from '../../styles/sharedStyles.module.css';
import { useState, useEffect } from 'react';
import { getData } from '../../services/api';
import { IFullDogInfo, orderType, imageType, limitType } from '../../types/commonTypes';
import { singleMapImage } from '../../types/propsTypes';
import RightBlock from '../../components/RightBlock';
import Head from 'next/head';

const GalleryPage = ():JSX.Element => {

const [breeds, setBreeds] = useState<IFullDogInfo[]>([]);
const [limit, setLimit] = useState<limitType>(99);
const [order, setOrder] = useState<orderType>('Random');
//not sure how to implement this one properly. Api by type did not work for me when i have tested it
const [type, setType] = useState<imageType>('All');
const [imageGrid, setImageGrid] = useState<singleMapImage[]>([]);
const [isUploadNeeded, setIsUploadNeeded] = useState<boolean>(false);

useEffect(() => {
  if (isUploadNeeded) {
    document.body.style.overflow = 'hidden'
  }
  return () => [
    document.body.style.overflow = 'scroll'
  ]
}, [isUploadNeeded])

const refreshBreed = () => {
    if (breeds.length !== 0) {
        const limited = []
        for (let i=0; i <= limit-1; i++) {
           const image:singleMapImage = {
            url : breeds[i].image.url,
            id: breeds[i].id.toString(),
            name: breeds[i].name,
            image_id: breeds[i].image.id
           }
           limited.push(image);
        }
        switch (order) {
            case 'Random': 
            const shufled = [...imageGrid].sort(() => Math.random() - 0.5);
            setImageGrid(shufled);
            return;
            case 'Ascending': 
            const sorted = [...imageGrid].sort((a,b) => a.name.localeCompare(b.name));
            console.log('asc')
            setImageGrid(sorted);
            return;
            case 'Descending' :
            const sortedBackwords = [...imageGrid].sort((a,b) => b.name.localeCompare(a.name));
            console.log('desc')
            setImageGrid(sortedBackwords);
            return;
            default: 
            setImageGrid(imageGrid)
          } } }

useEffect(() => {
    getData('/breeds')
    .then(data => {
        setBreeds(data.data);
        const limited = []
        for (let i=0; i <= limit-1; i++) {
           const image:singleMapImage = {
            url : data.data[i]?.image.url,
            id: data.data[i]?.id,
            name: data.data[i]?.name,
            image_id: data.data[i].image.id
           }
           limited.push(image);
        }
        setImageGrid(limited);
    })
},[])

useEffect(() => {
    refreshBreed();
},[limit, breeds, order])
   
if (isUploadNeeded) {
    return(
        <>
    <Head>
      <title>Gallery page</title>
      <meta name="description" content={`This Gallery page. Check details below`}/>
    </Head>
        <NavBar/>
         <div className={styles.rightWrapper}>
         <UploadPortal setVisability={setIsUploadNeeded}/> 
         </div>
        </>
    )}
  
    return(
     <>
    <Head>
      <title>Gallery page</title>
      <meta name="description" content={`This Gallery page. Check details below`}/>
    </Head>
     <NavBar/>
     <RightBlock type={'float'} color ={'alt'}>
     <Breadcrumb refresh={refreshBreed} needToUpdate={setIsUploadNeeded} />
     <GalleryFilters setImagesView={setImageGrid} refresh={refreshBreed} setLimit={setLimit} setOrder={setOrder} setType={setType} breeds = {breeds}/>
     <GridImages limit={limit} images={imageGrid}/>
     </RightBlock>
     </>
    )
}

export default GalleryPage;