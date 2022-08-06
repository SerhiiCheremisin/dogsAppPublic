import {useState,useEffect} from 'react';
import { getData } from '../../services/api';
import { ISingleDog } from '../../types/commonTypes';

//components
import NavBar from '../../components/NavBar/NavBar';
import Breadcrumb from '../../components/Breadcrumb';
import BigImage from '../../components/voting/BigImage';
import LoadingSpinner from '../../components/LoadingSpinner';
import Logs from '../../components/voting/Logs';
import AdderButtons from '../../components/voting/Adders';
import Head from 'next/head';
import RightBlock from '../../components/RightBlock';

const VotingPage = ():JSX.Element => {

    const [randomDog, setRandomDog] = useState<ISingleDog[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPhotoReady, setIsPhotoReady] = useState<boolean>(false);


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
            setIsPhotoReady(true);
        })
     }
  },[isLoading])

  const imageRender = isPhotoReady ? <BigImage url={randomDog[0]?.url}/> : <LoadingSpinner/>

    return(
      <>
      <Head>
        <title>Voting page</title>
        <meta name="description" content={`This isvoting page. Check details below`}/>
      </Head>
        <NavBar/>
        <RightBlock type={'float'} color ={'alt'}>
        <Breadcrumb/>
        { imageRender }
        <AdderButtons update={updateState} id={randomDog[0]?.id} />
        <Logs/>
        </RightBlock>  
     </>
    ) 
}

export default VotingPage;