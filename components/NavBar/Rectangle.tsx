import styles from '../../styles/sharedStyles.module.css';
import { IRectangleProps } from '../../types/propsTypes';
import { useSelector } from 'react-redux';
import { backgroungColorAlt } from '../../services/common';
import { RootState } from '../../redux/store';

import Link from 'next/link';
import Image from 'next/image'; 

const Rectangle = ( {imageLink, linkTo, isActive} :IRectangleProps ):JSX.Element => {
   const theme = useSelector( (state:RootState) => state.appReducer.isDarkTheme);


    if (isActive) {
    return(
        <button style={backgroungColorAlt(theme)} className={styles.rectangleBigActive}>
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
    return(
        <button style={backgroungColorAlt(theme)}  className={styles.rectangleBig}>
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