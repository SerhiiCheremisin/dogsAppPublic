import { ISingleDogCardProps } from '../types/propsTypes';
import styles from '../styles/sharedStyles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { backgroungColorAlt } from '../services/common';

const SingleDogCard = ( {dog} : ISingleDogCardProps ) : JSX.Element => {
  
  const theme = useSelector( (state:RootState) => state.appReducer.isDarkTheme);

    return(
        <div className={styles.singleDogWrapper}>
          <span>{dog.bred_for}</span>
          <div className={styles.temperament}>
            <strong>Temperament</strong><br />
            <span>{dog.temperament}</span>
          </div>
          <div className={styles.list}>
            <ul>
                <li><strong>Origin : </strong><span>{dog.origin !== undefined ? dog.origin : 'Uknown' }</span></li>  
                <li><strong>Weight : </strong><span>{`${dog.weight.metric} kgs`}</span></li>  
                <li><strong>Life span : </strong><span>{dog.life_span}</span></li>
            </ul>
          </div>

          <div style={backgroungColorAlt(theme)} className={styles.titleBlock}>
            {dog.name.toUpperCase()}
          </div>
        </div>
    )
}

export default SingleDogCard;