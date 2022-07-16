import styles from '../../styles/gridImages.module.css';
import { IGridImagesProps, singleMapImage } from '../../types/propsTypes';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const GridImages = ( {images}:IGridImagesProps ):JSX.Element => {
const router = useRouter();

const hiddenFiller = (image:singleMapImage) => {
    if (router.pathname.includes('/breeds') || router.pathname.includes('/search')) {
      return(
        <div className={styles.hiddenFilter} >
        <button className={styles.button}> <Link key={image.id} href={`/breeds/${image.name.toLowerCase()}`}>{image.name}</Link></button>
         </div>
      )
    }
    if (router.pathname.includes('/gallery')){
      return(
        <div className={styles.hiddenFilter} >
        <button className={styles.favoriteDiv}>
        <Image
                       className={styles.image}
                       src={`/images/image-heart.png`}
                       alt="Picture with heart"
                       width={230}
                       height={300}
                     />
        </button>
        </div>
      )
    }
}
    const gridRender = images.map( (image:singleMapImage, idx: number ) => {
         
        if (idx === 0 || idx === 7 || idx === 10 || idx === 15)  {

            return(
              <Link key={image.id}  href={`/breeds/${image.name.toLowerCase()}`}>
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
              </Link>

            )
         }

       if (idx === 4 || idx === 8 || idx === 14 || idx === 18) {

        return(
          <Link key={image.id} href={`/breeds/${image.name.toLowerCase()}`}>
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
            </Link>
        )
       } 

       return(
        <Link key={image.id} href={`/breeds/${image.name.toLowerCase()}`}>
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
      </Link>
       )
    })

    return(
        <div className={styles.gridWrapper}>
        {   gridRender  }
        </div>
    )
}

export default GridImages;