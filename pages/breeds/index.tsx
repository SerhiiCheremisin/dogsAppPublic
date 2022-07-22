//components
import NavBar from '../../components/NavBar/NavBar';
import Breadcrumb from '../../components/Breadcrumb';
import GridImages from '../../components/voting/GridImages';
import LoadingSpinner from '../../components/LoadingSpinner';

import { useState, useEffect } from 'react';
import { getData } from '../../services/api';
import styles from '../../styles/sharedStyles.module.css';
import { singleMapImage } from '../../types/propsTypes';
import { IFullDogInfo } from '../../types/commonTypes';


const BreedsPage = ():JSX.Element => {


    const [breeds, setBreeds] = useState<IFullDogInfo[]>([]);
    const [filteredBreed, setFilteredBreed] = useState<singleMapImage[]>([]);
    const [limit, setLimit] = useState<number>(99);
    const [isLoading, setIsLoading] = useState<boolean>(true); 

    const selectBreedHandler = () => {
       if (breeds.length !== 0) {
        const tempArray: singleMapImage[] = [];
        for (let i = 0; i <= limit-1; i++) {
            const imageItem:singleMapImage = {
                url: breeds[i].image.url,
                id: breeds[i].id,
                name: breeds[i].name
            }
            tempArray.push(imageItem)
        }
        setFilteredBreed(tempArray);
     }}

     useEffect(() => {
      selectBreedHandler();
     }, [limit, breeds])
     

  useEffect(() => {
    getData('/breeds')
    .then(data => {  
        setBreeds(data.data);
        setIsLoading(false);
    })
  },[])
  
  useEffect(() => {
    if (isLoading === false) {
        selectBreedHandler();
    }
  },[isLoading])

  const breedSorter = (value:string):void => {
    if (value === 'sort') {
         if (breeds[0].name === filteredBreed[0].name){
            return
         }
         const sortedArray = [...filteredBreed].reverse()
         setFilteredBreed(sortedArray);
    }
    if (value === 'reverse') {
        if (breeds[0].name !== filteredBreed[0].name){
            return
         }
         const sortedArray = [...filteredBreed].reverse()
         setFilteredBreed(sortedArray);
    }
    }


    return(
       <>
       <NavBar/>
       <Breadcrumb update={selectBreedHandler} setLimit={setLimit} breeds={breeds} setSort={breedSorter}/>
       { isLoading === true ? <LoadingSpinner/> : <GridImages images={filteredBreed} limit={limit}/> }   
       </>
    )
}

export default BreedsPage;