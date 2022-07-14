import styles from '../styles/sharedStyles.module.css';
import { useRouter } from 'next/router';
//components
import Link from 'next/link';
import Image from 'next/image';


const Breadcrumb = ():JSX.Element => {
const router = useRouter();

const breadcrumbButtonName: string = router.pathname.includes('search') ? 'SEARCH' : router.pathname.toUpperCase().replace('/', '');


    return(
        <div className={styles.breadcrumbWrapper}>
            <button onClick={() => router.back()} className={styles.rectangleSmall}>
            <Image
              src='/images/image-arrow-left.png'
              alt="Link to specific page"
              width={13}
              height={20}
            />
            </button>
            <div className={styles.breadcrumbButton}>
                {breadcrumbButtonName}
            </div>
          
        </div>
    )
}

export default Breadcrumb;