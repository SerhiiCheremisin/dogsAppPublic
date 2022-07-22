import styles from '../../styles/gallery.module.css';
import { IGalleryFilterProps, singleMapImage } from '../../types/propsTypes';
import { IFullDogInfo } from '../../types/commonTypes';

import Image from 'next/image';
import React from 'react';

const GalleryFilters = ( {setType, setOrder, setLimit, breeds, refresh, setImagesView} :IGalleryFilterProps ):JSX.Element => {

  const breedListHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'All breeds') {
      const limited = []
      for (let i=0; i <= breeds.length; i++) {
         const image:singleMapImage = {
          url : breeds[i]?.image.url,
          id: breeds[i]?.id.toString(),
          name: breeds[i]?.name,
          image_id: breeds[i]?.image.id
         }
         limited.push(image);
      }
      setLimit(99);
      setImagesView(limited);
      return
    }
    const dog:IFullDogInfo[] = breeds.filter((dog:IFullDogInfo) => dog.name === e.target.value);
    setLimit(5);
    setImagesView([{url: dog[0].image.url, id: dog[0].id, name: dog[0].name, image_id: dog[0].image.id}]);
  }  
    return(
        <>
            <div className={styles.filterWrapper}>
            <div className={styles.filterItem}>
             <label htmlFor="order">Order</label>
             <select onChange={e => setOrder(e.target.value)} name="type" id="type">
                <option value="Random">Random</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
             </select>
            </div>
            <div className={styles.filterItem}>
             <label htmlFor="type">Type</label> 
             <select onChange={e => setType(e.target.value)} name="type" id="type">
               <option value="All">All types</option>
               <option value="Static">Static</option>
               <option value="Animated">Animated</option>
             </select>
            </div>
            <div className={styles.filterItem}>
             <label htmlFor="breed">Breed</label>
             <select onChange={(e) => breedListHandler(e)} name="type" id="type">
             <option value="All breeds">All breeds</option>  
                {
                    breeds.map( (dog:IFullDogInfo)=> {
                        return(
                            <>
                               <option key={dog.id} value={dog.name}>{dog.name}</option>
                            </>               
                        )
                    }) 
                }
             </select>
            </div>
            <div className={styles.filterItem}>
             <label htmlFor="limit">Limit</label>
             <select onChange={e => setLimit(Number(e.target.value))} name="limit" id="limit">
                <option value="99">All photos</option> 
                <option value="5">5 images per page</option>
                <option value="10">10 images per page</option>
                <option value="15">15 images per page</option>
                <option value="20">20 images per page</option>
             </select>
             <button onClick={() => refresh()} >
             <Image
                src="/images/update-20.svg"
                alt="Reload picture"
                width={30}
                height={30}
              />
             </button>
            </div>
        </div>
        </>

    )
}

export default GalleryFilters;