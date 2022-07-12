import axios from "axios";

const key: string = 'd511b983-925b-4e7c-898c-7121fd270b9c';
const rootURL: string = 'https://api.thedogapi.com/v1';

export const getData = async (link:string):Promise<any> => {
   try {
      const request = await axios.get(`${rootURL}${link}`, {
        headers : {
            'x-api-key' : key
        }
      })
      const respond = await request;
      return respond

   } catch (error) {
    console.log(error)
   }
}

export const getBasicInfoForBreed = async (breed:string):Promise<any> => {
   try {
       const request = await axios.get(`${rootURL}/breeds/search?q=${breed}`, {
         headers : {
             'x-api-key' : key
         }
       })
       const respond = await request;
       return respond
   } catch (error) {
      console.log(error)
   }
}

export const getFullInfoForBreed = async (id: number):Promise<any> => {
   try {
      const request = await axios.get(`${rootURL}/images/search?breed_ids=${id}`, {
         headers : {
             'x-api-key' : key
         }
       })
       const respond = await request;
       return respond
      
   } catch (error) {
      console.log(error)
   }
}