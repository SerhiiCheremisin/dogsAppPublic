import styles from '../../styles/sharedStyles.module.css';
import { useRouter } from 'next/router';
//components
import PawLogo from './PawLogo';
import CardRender from './CardWithTheLinks';

const FixedMenu = ():JSX.Element => {
const router = useRouter();

const bgColorLogic = router.route !== '/' ? "rgba(248, 248, 247, 1)" : ""

    return(
        <aside style={{backgroundColor: bgColorLogic}} className={styles.containerItem}>
          <PawLogo/>    
         <div className={styles.containerGapElement}>
         <h1>Hi intern!</h1>
         <span>Welcome to MI 2022 Front-end test</span>
         </div>
         <div className={styles.containerGapElement}>
          <h2>Lets start using The Dog API</h2>
          <CardRender/>
          </div>    
        </aside>
    )
}

export default FixedMenu;