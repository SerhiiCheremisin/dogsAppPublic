import styles from '../styles/navBar.module.css';
import { IBugrerProps } from '../types/propsTypes';

const BurgerMenu = ( {setModal} : IBugrerProps ):JSX.Element => {
    return(
        <div onClick={() => setModal(true)} className={styles.burger}>
           <div className={styles.burgerLine}></div>
        </div>
    )
}

export default BurgerMenu;