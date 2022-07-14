import styles from '../../styles/sharedStyles.module.css';
import Image from 'next/image';
import { IBigImageProps } from '../../types/propsTypes';
import AdderButtons from './Adders';


const BigImage = ( {url} : IBigImageProps ):JSX.Element => {
    return(
        <>
           <Image
             className={styles.bigphoto}
             src={`${url}`}
             alt="Random photo of the dog"
             width={1440}
             height={900}
           />
        </>

    )
}

export default BigImage;