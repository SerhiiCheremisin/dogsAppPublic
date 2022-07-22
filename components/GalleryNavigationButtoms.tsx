import styles from '../styles/gridImages.module.css';
import { IGalleryNavProps } from '../types/propsTypes';

import Image from 'next/image';

const GalleryNavBTNS = ( {amount, setChunk, currentID}:IGalleryNavProps ):JSX.Element =>  {

    const inactiveStyle = {
        color: 'grey',
        backgroundColor: 'white'
    }

    const activeStyle = {
        color: '#FF868E',
        backgroundColor: '#FBE0DC'
    }

    const prevStyleBTN = () => {
        if (currentID === 0) {
          return inactiveStyle;  
        }
        return activeStyle;
    }

    const nextStyleBTN = () => {
        if (currentID === amount-1) {
            return inactiveStyle;
          }
          return activeStyle;
    }
 
  const increaseHandler = () => {
       if (currentID === amount-1){
        return
       }
       setChunk(currentID + 1)
  }
  const decreaseHandler = () => {
    if (currentID === 0){
        return
       }
       setChunk(currentID - 1)
}

  return (
    <div className={styles.navBTNS}>
       <button onClick={() => decreaseHandler()}  style={prevStyleBTN()} className={styles.navBTNItem}>
       <Image
         src="/images/image-arrow-left.png"
         alt="Picture of the author"
         width={25}
         height={25}
       />
        PREV
       </button>
       <button onClick={() => increaseHandler()} style={nextStyleBTN()} className={styles.navBTNItem}>
       NEXT
       <Image
         src="/images/image-arrow-right.png"
         alt="Picture of the author"
         width={25}
         height={25}
       />
       </button>
    </div>
 )
}

export default GalleryNavBTNS;