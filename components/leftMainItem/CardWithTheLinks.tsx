import { useEffect, useState } from "react";
import styles from '../../styles/sharedStyles.module.css';
import { ICard } from '../../types/commonTypes';
import { CardRenderProps} from '../../types/propsTypes';

//components
import AnimalCard from './AnimalCard';

const CardRender = ( {cards} : CardRenderProps ):JSX.Element => {

  const [dogCards, setdogCards] = useState<ICard[]>([])

useEffect(() => {
 if(cards === undefined) {
   const plainState : ICard[] = [
    {   linkTo: '/voting',
        name: 'voting',
        photo: '/images/vote-table.png',
        bgColor: '#B4B7FF',
    },

    {   linkTo: '/breeds',
        name: 'breeds',
        photo: '/images/pet-breeds.png',
        bgColor: '#97EAB9'
    },
    
    {   linkTo: '/gallery',
        name: 'gallery',
        photo: '/images/images-search.png',
        bgColor: '#FFD280'
    }
   ]
   setdogCards(plainState)
 }
},[])

    return(
        <div className={styles.cardContainer}>
         { dogCards.map( (el:ICard, id:number ) => <AnimalCard card={el} key ={id}/> ) }
        </div>
    )
}

export default CardRender;