import styles from '../styles/gridImages.module.css';
import { IGridImagesProps, singleMapImage } from '../../types/propsTypes';
import Image from 'next/image'

const GridImages = ( {images}:IGridImagesProps ):JSX.Element => {
 
    const gridRender = images.map( (image:singleMapImage, idx: number ) => {
         
        if (idx === 0 || idx === 7 || idx === 10) {
            return(
                <div key={image.id} className={styles.longImage}>
                     <Image
                       className={styles.image}
                       src={image.url}
                       alt="Picture of the dog"
                       width={200}
                       height={300}
                     />
                </div>
            )
         }

       if (idx === 4 || idx === 8 || idx === 14) {
        return(
            <div key={image.id} className={styles.bigImage}>
                 <Image
                   className={styles.image}
                   src={image.url}
                   alt="Picture of the dog"
                   width={420}
                   height={300}
                 />
            </div>
        )
       } 

       return(
        <div key={image.id} className={styles.regularImage}>
        <Image
          className={styles.image} 
          src={image.url}
          alt="Picture of the dog"
          width={200}
          height={140}
        />
   </div>
       )
    })

    return(
        <div className={styles.gridWrapper}>
        {   gridRender  }
        </div>
    )
}

export default GridImages;