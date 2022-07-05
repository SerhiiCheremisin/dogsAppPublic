//components
import FixedMenu from '../../componnts/leftMainItem/LeftFixedMenu';

import styles from '../../styles/sharedStyles.module.css';

const GalleryPage = ():JSX.Element => {
    return(
        <main className={styles.container}>  
          <FixedMenu/>  
        </main>
    )
}

export default GalleryPage;