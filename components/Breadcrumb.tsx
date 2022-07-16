import styles from '../styles/sharedStyles.module.css';
import { useRouter } from 'next/router';
import { BreadcrumbProps } from '../types/propsTypes';
import { IDogObject } from '../types/commonTypes';
import React, { useState, useEffect } from 'react';


//components
import Link from 'next/link';
import Image from 'next/image';

const Breadcrumb = ( {breeds, setLimit, setSort, id}: BreadcrumbProps ):JSX.Element => {
const router = useRouter();

const breedChoserHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
   if (e.target.value === "All breads") {
    return
   }
   router.push(`/breeds/${e.target.value.toLowerCase()}`)
}

const breadcrumbButtonName = () => {
  if (router.pathname.includes('search')){
    return 'SEARCH' 
  }

  if (router.pathname.includes('/breeds/')) {
     return 'BREEDS'
  }

  return router.pathname.toUpperCase().replace('/', '');
}  

const additionSections = () => {
    if(router.pathname === '/breeds') {
        return(
            <>
             <select onChange={e => breedChoserHandler(e)} name="breeds" id="breeds">
             <option value="All breads">All breeds:</option>
               {breeds?.map( (el:IDogObject) => {
                return(
                    <option value={el.name} key ={el.id}>
                      {el.name}
                    </option>
                )
               })}
             </select>
             <select onChange={ (e:any) => setLimit(e.target.value)} name="limit" id="limit">
                <option value='5'>Chose the limit</option> 
                <option value='5'>{`Limit: 5`}</option>
                <option value="10">{`Limit: 10`}</option>
                <option value="15">{`Limit: 15`}</option>
                <option value="20">{`Limit: 20`}</option>
             </select>
             <div onClick={() => setSort('sort')} style={{backgroundColor: '#F8F8F7'}} className={styles.rectangleSmall}><Image
              src='/images/sort-up.png'
              alt="Link to specific page"
              width={20}
              height={20}
            /></div>
             <div onClick={() => setSort()} style={{backgroundColor: '#F8F8F7'}} className={styles.rectangleSmall}>
             <Image
              src='/images/sort-down.png'
              alt="Link to specific page"
              width={20}
              height={20}
            />
             </div>
            </>
        )
    }
  if (router.pathname.includes('/breeds/')) {
      return (
        <div className={styles.rectangleLong}>
           {id}
        </div> 
      )
  }
}

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
                {breadcrumbButtonName()}
            </div>
            { additionSections() }
          
        </div>
    )
}

export default Breadcrumb;