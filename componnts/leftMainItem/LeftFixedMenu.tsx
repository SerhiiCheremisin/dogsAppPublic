import styles from '../../styles/sharedStyles.module.css';

//components
import PawLogo from './PawLogo';
import CardRender from '../leftMainItem/CardWithTheLinks';

const FixedMenu = ():JSX.Element => {
    return(
        <aside className={styles.containerItem}>
          <PawLogo/>    
         <div className={styles.containerGapElement}>
         <h1>Hi intern!</h1>
         <span>Welcome to MI 2022 Front-end test</span>
         </div>
         <div className={styles.containerGapElement}>
          <h2>Lets start using The Cat API</h2>
          <CardRender/>
          </div>    
        </aside>
    )
}

export default FixedMenu;