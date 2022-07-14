import styles from '../../styles/sharedStyles.module.css';
import Image from 'next/image';
import { IAddersProps, } from '../../types/propsTypes';
import { IVotingBody, IFavoriteBody } from '../../types/commonTypes';
import { voteForPhoto, addTofavourites } from '../../services/api';

const AdderButtons = ( {id, update} : IAddersProps ):JSX.Element => {
 
 const voteHandler = (vote:number):void => {
    const body :IVotingBody = {
      image_id: id,
      value: vote 
    }
    voteForPhoto(body);
    update();
 }

 const favoriteHandler = () => {
    const body:IFavoriteBody = {
      image_id: id
    }
    addTofavourites(body);
    update();
 }

    return(
        <div className={styles.adderButtonsWrapper}>
         <div onClick={() => voteHandler(1)} className={styles.adderButton}>
         <Image
           src="/images/smile-white.png"
           alt="Smile face"
           width={35}
           height={35}
         />
         </div>
         <div onClick={favoriteHandler} className={styles.adderButton}>
         <Image
           src="/images/heart-white.png"
           alt="Smile face"
           width={35}
           height={35}
         />
         </div>
         <div onClick={() => voteHandler(0)} className={styles.adderButton}>
         <Image
           src="/images/sad-face-white.png"
           alt="Smile face"
           width={35}
           height={35}
         />
         </div>
        </div>
    )
}

export default AdderButtons;