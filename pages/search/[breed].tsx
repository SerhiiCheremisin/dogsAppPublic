import { getData , getBasicInfoForBreed, getFullInfoForBreed} from '../../services/api';
import { staticPath, IStaticPathsReturn, IStaticPropsReturn } from '../../types/nextJSStatic';
import { IDogObject, IFullDogInfo} from '../../types/commonTypes';
import { singleMapImage } from '../../types/propsTypes';
import { useState, useEffect } from 'react';

//components
import Head from "next/head";
import NavBar from '../../components/NavBar/NavBar';
import Breadcrumb from '../../components/Breadcrumb';
import GridImages from '../../components/voting/GridImages';

export const getStaticPaths = async ():Promise<IStaticPathsReturn> => {
    
    const paths = await getData('/breeds')
    .then( data => { 
     const temp = data?.data.map( (el:IDogObject) => {
        return ({params : {breed: el.name.toLowerCase()}})
      })
   return temp

})
return {
    paths: paths,
    fallback: false
}
}

export const getStaticProps = async (context:any):Promise<IStaticPropsReturn> => {  
    const breed = context.params.breed;

    const breedPageProps = await getBasicInfoForBreed(breed)
    .then( (dog) => {
           return dog.data
    });
    return {
        props: {breed: breedPageProps}
    }
}

const SearchPAge = ( {...props} ):JSX.Element => {

    const [breedURL, setBreedURL] = useState<singleMapImage[]>([]);
    const {breed} = props;
    const breedInformation = breed[0];


useEffect(() => {
    getFullInfoForBreed(breedInformation.id)
    .then( data => {
        const returnValue:singleMapImage[] = [];
        returnValue.push({url: data.data[0].url, id:  data.data[0].id});
        setBreedURL(returnValue);
    })
})


    return(
        <>
         <Head>
            <title>{`This is page for a ${breedInformation.name}`}</title>
            <meta name="description" content={`This is page for a ${breedInformation.name}. Check details below`}/>
        </Head>
       <NavBar isSearchPage={true} searchName={breedInformation.name} />
       <Breadcrumb/> 
       <div>
       <span>Result search for : </span> {breedInformation.name}
       </div>
       <GridImages images={breedURL}/>
        </>
    )
}

export default SearchPAge;