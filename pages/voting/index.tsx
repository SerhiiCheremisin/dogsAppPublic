import {useState,useEffect} from 'react';
import { getData } from '../../services/api';
import { ISingleDog } from '../../types/commonTypes';

//components
import FixedMenu from '../../componnts/leftMainItem/LeftFixedMenu';
import NavBar from '../../componnts/NavBar/NavBar';

import styles from '../../styles/sharedStyles.module.css';

const VotingPage = ():JSX.Element => {


    const [randomDog, setRandomDog] = useState<ISingleDog[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const updateState = ():void => {
      getData('/images/search').then( data => {
            setRandomDog(data?.data);
        })
    
    }

 useEffect(() => {
   if (randomDog.length === 0) {
     setIsLoading(true);
     return
   }
  },[])

  useEffect(() => {
     if (isLoading) {
      getData('/images/search').then( data => {
            setRandomDog(data?.data);
            setIsLoading(false);
        })
       return
     }
  },[isLoading])
  
    return(
      <>
      <NavBar/>
      </>      
    ) 
}

export default VotingPage;