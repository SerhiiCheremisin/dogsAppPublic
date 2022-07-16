import { IStaticPathsReturn, IStaticSingleBreedProps } from '../../types/nextJSStatic';
import { getData, getFullInfoForBreed, getBasicInfoForBreed } from '../../services/api';
import { IDogObject } from '../../types/commonTypes';
import { useEffect, useState } from 'react';


//components
import NavBar from '../../components/NavBar/NavBar';
import Breadcrumb from '../../components/Breadcrumb';
import BigImage from '../../components/voting/BigImage';
import LoadingSpinner from '../../components/LoadingSpinner';
import SingleDogCard from '../../components/SingleDogCard';


export const getStaticPaths = async ():Promise<IStaticPathsReturn> => {
    
    const paths = await getData('/breeds')
    .then( data => { 
     const temp = data?.data.map( (el:IDogObject) => {
        return {params : {singleBreed: el.name.toLowerCase()}}
      })
   return temp
})
return {
    paths: paths,
    fallback: false
}
}

export const getStaticProps = async (context:any):Promise<IStaticSingleBreedProps> => {  
    const singleBreed = context.params.singleBreed;

    const breedPageProps = await getBasicInfoForBreed(singleBreed)
    .then( (dog) => {
           return dog.data
    });
    return {
        props: {singleBreed: breedPageProps}
    }
}


const SingleBreedInfo = ( {...props} ):JSX.Element => {

    const [url, setUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { singleBreed } = props;
    const breed = singleBreed[0];

    useEffect(() => {
        getFullInfoForBreed(breed.id)
        .then( data => {
            setUrl(data.data[0].url);
            setIsLoading(false);
        })
    },[])

    return(
        <>
     <NavBar/>
     <Breadcrumb id ={breed.id}/>
     { isLoading ? <LoadingSpinner/> : <BigImage url ={url}/> }  
     <SingleDogCard dog={breed} />
        </>
    )
}

export default SingleBreedInfo;