import styles from '../../styles/sharedStyles.module.css';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { backgroungColor, textColor } from '../../services/common';

//components
import PawLogo from './PawLogo';
import CardRender from './CardWithTheLinks';

const FixedMenu = ():JSX.Element => {
const router = useRouter();
const theme = useSelector((state:RootState) => state.appReducer.isDarkTheme); 


    return(
        <aside style={backgroungColor(theme)} className={styles.containerItem}>
          <PawLogo/>    
         <div className={styles.containerGapElement}>
         <h1 style={textColor(theme)}>Greetings</h1>
         <span style={textColor(theme)}>You can search for information about any dog you want</span>
         </div>
         <div className={styles.containerGapElement}>
          <h2 style={textColor(theme)} >Lets start using The Dog API</h2>
          <CardRender/>
          </div>    
        </aside>
    )
}

export default FixedMenu;