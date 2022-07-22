import styles from '../styles/sharedStyles.module.css';

const NoData = ():JSX.Element => {
    return(
        <div className={styles.noData}>
            No item found
        </div>
    )
}

export default NoData;