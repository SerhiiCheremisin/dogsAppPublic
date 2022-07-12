import styles from '../../styles/navBar.module.css';
import shared from '../../styles/sharedStyles.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { getData } from '../../services/api';
import { IBreedChunk } from '../../types/commonTypes';
import Link from 'next/link';
//components
import Rectangle from './Rectangle';

const NavBar = (): JSX.Element => {

  const [searchedBreed, setSearchedBreed] = useState<string>('');
  const [isSearchAvtive, setIsSearchActive] = useState<boolean>(false);
  const [breeds, setBreeds] = useState<IBreedChunk[]>([]);

  useEffect(() => {
    getData('/breeds').then( data => {
        const breedsState: IBreedChunk[] = data?.data.map((el:IBreedChunk) => {
            let element = {
                name :el.name,
                id: el.id
            }
            return element
        })
        setBreeds(breedsState);
    })
  },[])

  const formHandler = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    
  }

  const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
     if (value === '') {
        setIsSearchActive(false);
        setSearchedBreed('');
        return
     }
     setIsSearchActive(true);
     setSearchedBreed(value);
  }

  const listRenderLogic = () => {
    let result = breeds.filter( (el:IBreedChunk) => el.name.includes(searchedBreed))
   
    if (result.length === 0) {
      return(
        <div className={styles.hiddenMenu}>
         <span>Such breed does not exist</span>
        </div> 
         )
    }
    return (
        <div className={styles.hiddenMenu}>
           <ul>
            { result.map( (el:IBreedChunk) =>  {
                return (
                   <>
                    <li key={el.id}><Link href={`/search/${el.name.toLocaleLowerCase()}`}><a>{el.name}</a></Link></li>
                   </>
                )
            }) }
           </ul>
        </div> 
    )
  }
 
    return(
        <nav className={styles.navWrapper}>
            <div className={styles.searchAndLinks}> 
            <form action="#" onSubmit={e => formHandler(e)}>
            <input value={searchedBreed} onChange={e => inputHandler(e)} placeholder='Search for breeds by name' id='input' type="text" />   
            { isSearchAvtive &&  listRenderLogic()}    
            <button type='submit' className={styles.label}> 
              <div className={shared.rectangleSmall}>
              <Image
               className={styles.image}
               src="/images/image-search-icon.png"
               alt="Search icon"
               width={20}
               height={20}
             />   
              </div>    
              </button>  
            </form>
           <div className={styles.linksBTN}>
            <Rectangle imageLink = '/images/image-smile.png' linkTo= '/likes'/>
            <Rectangle imageLink = '/images/image-heart.png' linkTo= '/favorites'/>
            <Rectangle imageLink = '/images/image-sad-face.png' linkTo= '/dislikes'/>
           </div>
            </div> 
        </nav>
    )
}

export default NavBar