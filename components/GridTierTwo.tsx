import styles from '../styles/gridImages.module.css';
import { IGridImagesProps, singleMapImage } from '../types/propsTypes';
import { useRouter } from 'next/router';
import { addTofavourites } from '../services/api';

import Image from 'next/image';
import Link from 'next/link';

const GritTierTwo = ( {images} : IGridImagesProps ):JSX.Element => {

    const router = useRouter();

    const addToFavorite = (id:string, e:React.MouseEvent<HTMLButtonElement>):void => {
        addTofavourites({ image_id: id});
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
        if (idx === 2)  {
            return(
                <div className={styles.longImage}>
                     <Image
                       className={styles.image}
                       src={image.url}
                       alt="Picture of the dog"
                       width={230}
                       height={300}
                     />
             { hiddenFiller(image) }
                </div>
            )
         }

       if (idx === 3) {
        return(
            <div className={styles.bigImage}>
                 <Image
                   className={styles.image}
                   src={image.url}
                   alt="Picture of the dog"
                   width={500}
                   height={300}
                 />
                { hiddenFiller(image) }
            </div>
        )
       } 
       return(
        <>
        <div className={styles.regularImage}>
        <Image
          className={styles.image} 
          src={image.url}
          alt="Picture of the dog"
          width={230}
          height={160}
        />
         { hiddenFiller(image) }
      </div>
      </>
       )
    })

    return(
        <div className={styles.gridWrapperTwo}>
         {gridRender}
        </div>
    )


}

export default GritTierTwo;