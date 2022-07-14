import styles from '../../styles/sharedStyles.module.css';
import { IRectangleProps } from '../../types/propsTypes';
import Link from 'next/link';
import Image from 'next/image';

const Rectangle = ( {imageLink, linkTo} :IRectangleProps ):JSX.Element => {

    return(
        <button className={styles.rectangleBig}>
            <Link href={`${linkTo}`}>
            <Image
              src={imageLink}
              alt="Link to specific page"
              width={30}
              height={30}
            />
            </Link>
        </button>
    )
}


export default Rectangle;