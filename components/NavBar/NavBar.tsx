import styles from '../../styles/navBar.module.css';
import shared from '../../styles/sharedStyles.module.css';
import React, { useState, useEffect, useContext } from 'react';
import { getData } from '../../services/api';
import { IBreedChunk } from '../../types/commonTypes';
import { INavBarProps } from '../../types/propsTypes';
import { useRouter } from 'next/router';
import { WidthContext } from '../../pages/_app';

//components
import Rectangle from './Rectangle';
import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from '../BurgerMenu';
import AdapriveMainMenu from '../AdaptiveMainMenu';

const NavBar = ( { isSearchPage, searchName }:INavBarProps ): JSX.Element => {

  const [searchedBreed, setSearchedBreed] = useState<string>('');
  const [isSearchAvtive, setIsSearchActive] = useState<boolean>(false);
  const [breeds, setBreeds] = useState<IBreedChunk[]>([]);
  const router = useRouter();

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
  })
  useEffect(() => {
    if (searchedBreed == '' && router.pathname.includes('search')){
      setSearchedBreed('');
      return
    }
  },[searchedBreed])
  const formHandler = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    
  }
  const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
     if (value === '' && !router.pathname.includes('search')) {
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
                    <li onClick={() => setIsSearchActive(false)} key={el.id}><Link href={`/search/${el.name.toLowerCase()}`}><a>{el.name}</a></Link></li>
                   </>
                )
            }) }
           </ul>
        </div> 
    )
  } 
 const inputValue = isSearchAvtive === false && isSearchPage === true ? searchName : searchedBreed;
 const inputBorder = isSearchAvtive === false && isSearchPage === true ? 
 {
  border: '2px solid #FF868E',
  color: 'black'} 
 : {};

 const favoriteLogic = router.pathname.includes('favorites') ?  '/images/image-heart-Dark.png' : '/images/image-heart.png' ;
 const likesLogic = router.pathname.includes('/likes') ? '/images/smile-white.png' : '/images/image-smile.png';
 const dislikesLogic = router.pathname.includes('dislikes') ? '/images/sad-face-white.png' : '/images/image-sad-face.png';

 const isFavActive = router.pathname.includes('favorites') ? true : false;
 const islikevActive = router.pathname.includes('/likes') ? true : false;
 const isDislikeActive = router.pathname.includes('dislikes') ? true : false;

    return(
        <nav className={styles.navWrapper}>
            <div className={styles.searchAndLinks}> 
            <form action="#" onSubmit={e => formHandler(e)}>
            <input style={inputBorder} value={inputValue} onChange={e => inputHandler(e)} placeholder='Search for breeds by name' id='input' type="text" />   
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
            <Rectangle isActive={islikevActive} imageLink = {likesLogic} linkTo= '/likes'/>
            <Rectangle isActive={isFavActive} imageLink = {favoriteLogic} linkTo= '/favorites'/>
            <Rectangle isActive={isDislikeActive} imageLink = {dislikesLogic} linkTo= '/dislikes'/>
           </div>
            </div> 
        </nav>
    )
}

export default NavBar