import styles from '../../styles/gridImages.module.css';
import { IGridImagesProps, singleMapImage } from '../../types/propsTypes';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { addTofavourites } from '../../services/api';

import GritTierOne from '../GridTierOne';
import GritTierTwo from '../GridTierTwo';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import TooManyPhotos from '../TooManyPhotos';

const GridImages = ( {images, limit}:IGridImagesProps ):JSX.Element => {
const router = useRouter();

const [loading, setLoading] = useState<boolean>(false);

useEffect(() => {
  if (images.length === 0) {
    setLoading(false);
  }
  setLoading(true);
})

    const render = () => {
       if (limit === undefined || limit === 5) {
           return (
            <>
            <GritTierOne images = {[...images].slice(0, 5)} />
            </>
           )
       }
       if (limit === 10) {
        return (
          <>
          <GritTierOne images = {[...images].slice(0, 5)} />
          <GritTierTwo images = {[...images].slice(5, 10)} />
          </>
         )
       }
       if (limit === 15) {
        return (
          <>
          <GritTierOne images = {[...images].slice(0, 5)} />
          <GritTierTwo images = {[...images].slice(5, 10)} />
          <GritTierOne images = {[...images].slice(10, 15)} />
          </>
         )
       }
       if (limit === 20) {
        return (
          <>
          <GritTierOne images = {[...images].slice(0, 5)} />
          <GritTierTwo images = {[...images].slice(5, 10)} />
          <GritTierOne images = {[...images].slice(10, 15)} />
          <GritTierTwo images = {[...images].slice(15, 20)} />
          </>
         )
       }
       // If i want to use uknown amount of photos
       if (limit === 99) { 
        return (
          <>
           <TooManyPhotos images={images}/>
          </>
        )
       }
    }

   if (loading === false) {
    return (
      <div className={styles.gridWrapper}>
      <LoadingSpinner/>
    </div>
    )
   }

    return(
        <div className={styles.gridWrapper}>
          { render() }
        </div>
    )
}

export default GridImages;