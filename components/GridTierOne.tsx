import styles from '../styles/gridImages.module.css';
import { IGridImagesProps, singleMapImage } from '../types/propsTypes';
import { useRouter } from 'next/router';
import { addTofavourites } from '../services/api';

import Image from 'next/image';
import Link from 'next/link';

const GritTierOne = ( {images} : IGridImagesProps ):JSX.Element => {
    const router = useRouter();

    const addToFavorite = (id:string, e:React.MouseEvent<HTMLButtonElement>):void => {
      addTofavourites({image_id: id});
     }
      

    const hiddenFiller = (image:singleMapImage) => {
        if (router.pathname.includes('/breeds') || router.pathname.includes('/search')) {
          return(
            <div className={styles.hiddenFilter} >
            <button className={styles.button}> <Link key={image.id} href={`/breeds/${image.name.toLowerCase()}`}>{image.name}</Link></button>
             </div>
          )
        }
        if (router.pathname.includes('/gallery') || router.pathname.includes('/favorites')){
          return(
            <div className={styles.hiddenFilter} >
            <button onClick={(e:any) => addToFavorite(image.image_id, e)} className={styles.favoriteDiv}>
                         <Image
                           className={styles.image}
                           src={`/images/image-heart.png`}
                           alt="Picture with heart"
                           width={30}
                           height={30}
                         />
            </button>
            </div>
          )
        }
    }
    const gridRender = images.map( (image:singleMapImage, idx: number ) => {
        if (idx === 0)  {
            return(
                <div key={image.id} className={styles.longImage}>
                     <Image
                       className={styles.image}
                       src={image.url}
                       alt="Picture of the dog"
                       layout="fill"
                     />
             { hiddenFiller(image) }
                </div>
            )
         }

       if (idx === 4) {
        return(
            <div key={image.id} className={styles.bigImage}>
                 <Image
                   className={styles.image}
                   src={image.url}
                   alt="Picture of the dog"
                   layout="fill"
                 />
                { hiddenFiller(image) }
            </div>
        )
       } 
       return(
        <>
        <div key={image.id} className={styles.regularImage}>
        <Image
          className={styles.image} 
          src={image.url}
          alt="Picture of the dog"
          layout="fill"
        />
         { hiddenFiller(image) }
      </div>
      </>
       )
    })


    return(
    <div className={styles.gridWrapperOne}>
     { gridRender }
    </div>
    )


}

export default GritTierOne;