import styles from '../../styles/sharedStyles.module.css';
import { customCardStyle } from '../../types/commonTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

//next.js imports
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

const AnimalCard = ( {...props} ):JSX.Element => {

    const { card } = props
    const route = useRouter();
    const theme = useSelector((state:RootState) => state.appReducer.isDarkTheme);
    const appWidth = useSelector( (state:RootState) => state.appReducer.appWidth);

    const bGroundLogic = () => {
        if (theme) {
           return route.route === card.linkTo ? 'rgba(255, 134, 142, 1)' : '#343434';
        }
        return bgColorCustom
    }

    const bgColorCustom = route.route === card.linkTo ? 'rgba(255, 134, 142, 1)' : '';
    const colorCustom = route.route === card.linkTo ? 'white' : '';
    const borderCustom = route.route === card.linkTo ? '4px solid rgba(251, 224, 220, 1)' : '';


    const customStyles: customCardStyle = {
          background: card.bgColor,
          border: borderCustom
    }

    return(
        <div className={styles.navigationCardWrapper}>
        <div style={customStyles} className={styles.navigationCard}> 
         <div>
            <Image
            src={card.photo}
            alt="Picture of the author"
            width='140%'
            height='180%'
            />
         </div>
        </div>
           <div>
           <Link href={card.linkTo}><button style={{backgroundColor: bGroundLogic(), color: colorCustom}} className={styles.customButton}>{card.name.toUpperCase()}</button></Link> 
           </div>
        </div>
  
    )
}

export default AnimalCard;