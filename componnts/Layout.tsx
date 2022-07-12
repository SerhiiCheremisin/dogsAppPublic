import LeftFixedMenu from './leftMainItem/LeftFixedMenu';
import styles from '../styles/sharedStyles.module.css';

const Layout  = ( {children} ):JSX.Element => {

    return(<>
   <main className={styles.container}>  
    <LeftFixedMenu/>
    <div className={styles.containerItem}>{children}</div>
    </main>
    </>)
}

export default Layout;