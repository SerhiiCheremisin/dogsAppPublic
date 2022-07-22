import styles from '../../styles/pawLogoStyles.module.css';
import Link from 'next/link';

const PawLogo = ():JSX.Element => {
    
    return(
      <Link href={`/`}>
          <div className={styles.pawLogoContainer}>
           <div className={styles.pawLogoContainerPawBox}>
            <div style={{left:5,top: 37}} className={styles.pawItemRound}></div>
            <div style={{left:5, top: 27}} className={styles.pawItemRound}></div>
            <div style={{left:11, top: 20}} className={styles.pawItemRound}></div>
            <div style={{left:21, top: 19}} className={styles.pawItemRound}></div>
            <div style={{left:15, top: 28}} className={styles.pawItemEllipse}></div>
            <div style={{left:10, top: 33, transform: 'rotate(-90deg)'}} className={styles.pawItemEllipse}></div>
          </div>
            <h1>PetsPaw</h1>
        </div>
      </Link>
    )


}

export default PawLogo;