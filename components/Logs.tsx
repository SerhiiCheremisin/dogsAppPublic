import styles from '../styles/sharedStyles.module.css';
import { getData } from '../services/api';
import { useEffect, useState } from 'react';
import { ILogItem, IFavorite } from '../types/commonTypes';
import { useRouter } from 'next/router';

import Image from 'next/image';


const Logs = ():JSX.Element => {

    const [logs, setLogs] = useState<ILogItem[]>([]);
    const router = useRouter();
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

const time = (el:string): string => {

    const minutes = new Date(el).getMinutes() < 10 ? `0${new Date(el).getMinutes()}` : `${new Date(el).getMinutes()}`
    return `${new Date(el).getHours()}:${minutes}`;
}

const addedInfo = (value:number) => {
   let val:string = '';
    switch (value) {
         case 1 :
            val =  'added to likes'
            break;
         case 0 :
            val =  'added to dislikes'
            break;
         case 2:
            val =  'added to favourites'
            break;   
   }
   
    return `was ${val}`
}
const renderTemplate = (el:ILogItem | IFavorite) => {
   return (
      <div key={el.id} className={styles.logListItem}>
      <div className={styles.info}>
        <time>{time(el.created_at)}</time>
        <span>Image ID :</span>
        <strong>{el.image_id}</strong>
        <span>{addedInfo(el.value)}</span>  
      </div>
   <div className={styles.photo}>
        {dynamicImage(el.value)}
   </div>
      </div>
     )
}

const renderFavTemplate = (el:ILogItem | IFavorite) => {
   return (
      <div key={el.id} className={styles.logListItem}>
      <div className={styles.info}>
        <time>{time(el.created_at)}</time>
        <span>Image ID :</span>
        <strong>{el.image_id}</strong>
        <span>{addedInfo(2)}</span>  
      </div>
   <div className={styles.photo}>
        {dynamicImage(2)}
   </div>
      </div>
     )
}

const likesPage = logs.map( (el:ILogItem) => {
   if (el.hasOwnProperty('value') && el.value === 1) {
      return renderTemplate(el);
   }
})

const dislikesPage = logs.map( (el:ILogItem) => {
   if (el.hasOwnProperty('value') && el.value === 0) {
      return renderTemplate(el);
   }
})

const favoritesPage = logs.map( (el:ILogItem | IFavorite) => {
   if (!el.hasOwnProperty('value')) {
      return renderFavTemplate(el);
   }
})


    const votingPage = logs.map( (el:ILogItem | IFavorite) => {
         if (el.hasOwnProperty('value')) {
           return renderTemplate(el);
         }
          return renderFavTemplate(el); 
      })
 
      const listLogic = () => {
         if (router.pathname.includes('/voting')){
            return votingPage;
         }
         if (router.pathname.includes('/likes')){
            return likesPage;
         }
         if (router.pathname.includes('/dislikes')) {
            return dislikesPage;
         }
         if (router.pathname.includes('/favorites')) {
            return favoritesPage;
         }
      }

    const logsFeedback = logs.length === 0 ?
         <span>You have not added anything yet</span>
         :
         listLogic();
  

    return(
        <div className={styles.logsWrqpper}>
        {logsFeedback}
        </div>
    )
}

export default Logs;