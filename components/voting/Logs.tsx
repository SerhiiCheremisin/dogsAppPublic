import styles from '../../styles/sharedStyles.module.css';
import { getData } from '../../services/api';
import { useEffect, useState } from 'react';
import { ILogItem, IFavorite } from '../../types/commonTypes';
import Image from 'next/image';


const Logs = ():JSX.Element => {

    const [logs, setLogs] = useState<ILogItem[]>([]);

    useEffect(() => {
       const votes =  getData('/votes')
        .then(votes => votes.data)
        const fav = getData('/favourites')
        .then(favorites => favorites.data)
        Promise.all([votes, fav]).then(data => {
            const state = [...data[0], ...data[1]];
            setLogs(state);
        })
    },[])
console.log(logs);

const dynamicImage = (value:number) => {
    switch(value) {
       case (0) : 
        return  (
            <Image
              src='/images/image-sad-face.png'
              alt="Picture of the author"
              width={25}
              height={25}
              />
        ) 
       case (1) : 
       return  (
        <Image
          src='/images/image-smile.png'
          alt="Picture of the author"
          width={25}
          height={25}
          />
    ) 
       case (2) :
        return  (
            <Image
              src='/images/image-heart.png'
              alt="Picture of the author"
              width={25}
              height={25}
              />
        ) 
   }
}
const dynamicLabel = (id:string) => {

}
const time = (el:string): string => `${new Date(el).getHours()}:${new Date(el).getMinutes()}`;
const addedInfo = (value:string) => `was `

    const loginList = logs.map( (el:ILogItem | IFavorite) => {
       if (el.hasOwnProperty('value')) {
          return(
               <div key={el.id} className={styles.logListItem}>
               <time>{time(el.created_at)}</time>
                <span>Image ID</span>
                <strong>{el.image_id}</strong>
                <span>{addedInfo(el.value)}</span>  
                 {dynamicImage(el.value)}
                </div>
          )
       }
           return(
            <div key={el.id} className={styles.logListItem}>
            <time>{time(el.created_at)}</time>
            <span>Image ID</span>
            <strong>{el.image_id}</strong>
            <span>{addedInfo(el.value)}</span>    
             {dynamicImage(2)}
            </div>
           )

    })
    const renderLogic = logs.length === 0 ? <span>You have not added anything yet</span> : loginList

    return(
        <div className={styles.logsWrqpper}>
        {renderLogic}
        </div>
    )
}

export default Logs;