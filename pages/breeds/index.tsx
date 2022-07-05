//components
import FixedMenu from '../../componnts/leftMainItem/LeftFixedMenu';

import styles from '../../styles/sharedStyles.module.css';

const BreedsPage = ():JSX.Element => {
    return(
        <main className={styles.container}>  
          <FixedMenu/>  
        </main>
    )
}

export default BreedsPage;