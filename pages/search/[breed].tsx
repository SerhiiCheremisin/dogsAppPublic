import { getData , getBasicInfoForBreed, getFullInfoForBreed} from '../../services/api';
import { staticPath, IStaticPathsReturn, IStaticPropsReturn } from '../../types/nextJSStatic';
import { IDogObject, IFullDogInfo } from '../../types/commonTypes';
import Head from "next/head";

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
    const {breed} = props;
    const breedInformation = breed[0];

    return(
        <>
         <Head>
            <title>{`This is page for a ${breedInformation.name}`}</title>
            <meta name="description" content={`This is page for a ${breedInformation.name}. Check details below`}/>
        </Head>
        <h2>{`Breed page, this is ${breedInformation.name} page exactly`}</h2>
        </>
    )
}

export default SearchPAge;