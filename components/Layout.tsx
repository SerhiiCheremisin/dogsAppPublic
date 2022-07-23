import styles from '../styles/sharedStyles.module.css';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { WidthContext } from '../pages/_app';

import LeftFixedMenu from './leftMainItem/LeftFixedMenu';

const Layout  = ( {children} ):JSX.Element => {

    const router = useRouter();;
    const appWidth = useContext(WidthContext);

  return(
      <>
      <main className={styles.container}>  
          <LeftFixedMenu/>
         <div className={styles.containerItemRight}>
           {children}
         </div>
      </main>
      </>
      )
 }
export default Layout;
