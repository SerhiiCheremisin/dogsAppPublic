import styles from '../../styles/sharedStyles.module.css';
import { IBigImageProps } from '../../types/propsTypes';

import Image from 'next/image';

const BigImage = ( {url} : IBigImageProps ):JSX.Element => {
    return(
        <>
           <Image
             className={styles.bigphoto}
             src={`${url}`}
             alt="Random photo of the dog"
             width={1440}
             height={800}
           />
        </>

    )
}

export default BigImage;