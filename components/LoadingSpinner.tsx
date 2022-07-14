import Image from 'next/image';
import styles from '../styles/spinner.module.css';

const LoadingSpinner = ():JSX.Element => {
    
    return(
        <div className={styles.spinnerPlaceholder}>
         <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadingSpinner;