import styles from '../../styles/pawLogoStyles.module.css';
import { setTheme } from '../../redux/slices/appReducer';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { textColor } from '../../services/common';

//components
import Link from 'next/link';
import Image from 'next/image';

const PawLogo = ():JSX.Element => {

  const dispatch:AppDispatch = useDispatch();
  const theme = useSelector((state:RootState) => state.appReducer.isDarkTheme);

  const ballHandler = theme ? {left: '40px'} : {left: '6px'};
    return(
          <div className={styles.pawLogoContainer}>
            <div className={styles.pawbBlockWrapper}>
            <Link href={`/`}> 
              <div className={styles.pawLogoContainerPawBox}>
               <div style={{left:5,top: 37}} className={styles.pawItemRound}></div>
               <div style={{left:5, top: 27}} className={styles.pawItemRound}></div>
               <div style={{left:11, top: 20}} className={styles.pawItemRound}></div>
               <div style={{left:21, top: 19}} className={styles.pawItemRound}></div>
               <div style={{left:15, top: 28}} className={styles.pawItemEllipse}></div>
               <div style={{left:10, top: 33, transform: 'rotate(-90deg)'}} className={styles.pawItemEllipse}></div>
             </div>
           </Link>
            <h1 style={textColor(theme)}>PetsPaw</h1>
            </div>
          <div className={styles.themeSwitcherContainer}>
            <div className={styles.themeSwitcher}>
            <div className={styles.eye}>
             <Image
               src="/images/eye.svg"
               alt="Eye photo"
               width={30}
               height={30}
             />
              </div>
             <div className={styles.switcher}>
              <div onClick={() => dispatch(setTheme(!theme))} style={ballHandler} className={styles.switherBall}></div>
              </div>
            </div>
          </div>           
        </div>

    )


}

export default PawLogo;