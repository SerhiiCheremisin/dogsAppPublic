//components
import FixedMenu from '../../componnts/leftMainItem/LeftFixedMenu';

import styles from '../../styles/sharedStyles.module.css';


const VotingPage = ():JSX.Element => {
    return(
        <main className={styles.container}>  
          <FixedMenu/>  
        </main>
    )
}

export default VotingPage;