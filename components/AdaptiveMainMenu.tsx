import { IBugrerProps } from '../types/propsTypes';
import styles from '../styles/navBar.module.css';

import Image from 'next/image';
import CardRender from "./leftMainItem/CardWithTheLinks";

const AdapriveMainMenu = ( {setModal} : IBugrerProps ):JSX.Element => {

    return(
        <div className={styles.mobileModal}>     
          <div onClick={() => setModal(false)} className={styles.closeModalWrapper}>
          <Image
             className={styles.closeModalBTN}
             src="/images/image-cross.png"
             alt="Picture of the author"
             width={30}
             height={30}
            />
            </div>  
        <CardRender/>
        </div>
    )
}

export default AdapriveMainMenu;