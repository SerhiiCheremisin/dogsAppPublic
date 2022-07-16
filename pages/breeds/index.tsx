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
    const [limit, setLimit] = useState<number>(20);
    const [isLoading, setIsLoading] = useState<boolean>(true); 

    const selectBreedHandler = () => {
       if (breeds.length !== 0) {
        const tempArray: singleMapImage[] = [];

        for (let i = 0; i <= limit-1; i++) {
            const imageItem = {
                url: breeds[i].image.url,
                id: Number(breeds[i].id),
                name: breeds[i].name
            }
            tempArray.push(imageItem)
        }

        setFilteredBreed(tempArray);
     }}

     useEffect(() => {
      selectBreedHandler();
     }, [limit])
     

  useEffect(() => {
    getData('/breeds')
    .then(data => {
        setBreeds(data.data);
        setIsLoading(false);
    });
  },[])
  
  useEffect(() => {
    if (!isLoading) {
        selectBreedHandler();
    }
  },[isLoading])

  const breedSorter = (value:string):void => {
      const newState = [...filteredBreed].sort().reverse();
      setFilteredBreed(newState);
  }

    return(
       <>
       <NavBar/>
       <Breadcrumb setLimit={setLimit} breeds={breeds} setSort={breedSorter}/>
       { isLoading === true ? <LoadingSpinner/> : <GridImages images={filteredBreed}/> }   
       </>
    )
}

export default BreedsPage;