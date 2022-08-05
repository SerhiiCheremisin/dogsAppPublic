import styles from '../styles/sharedStyles.module.css';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { backgroungColor } from '../services/common';

import LeftFixedMenu from './leftMainItem/LeftFixedMenu';

const Layout = ( {children} ):JSX.Element => {

    const router = useRouter();
    const theme = useSelector((state:RootState) => state.appReducer.isDarkTheme);
    
  return(
      <>
      <main style={backgroungColor(theme)} className={styles.container}>  
          <LeftFixedMenu/>
         <div style={backgroungColor(theme)} className={styles.containerItemRight}>
           {children}
         </div>
      </main>
      </>
      )
 }
export default Layout;
