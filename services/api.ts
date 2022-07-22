import axios from "axios";
import { IVotingBody, IFavoriteBody } from '../types/commonTypes';

const key: string = 'd511b983-925b-4e7c-898c-7121fd270b9c';
const rootURL: string = 'https://api.thedogapi.com/v1';
const headers = {
   'x-api-key' : key
}
const postHeaders = {
   'x-api-key' : key,
   'content-type': 'application/json'
}

const uploadHeaders = {
   'x-api-key' : key,
   'content-type': 'multipart/form-data'
}

export const getData = async (link:string):Promise<any> => {
   try {
      const request = await axios.get(`${rootURL}${link}`, {
        headers : headers
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
         headers : headers
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
         headers : headers
       })
       const respond = await request;
       return respond
      
   } catch (error) {
      console.log(error)
   }
}

export const voteForPhoto = async (body:IVotingBody):Promise<any> => {
   try {
      const request = await axios.post(`${rootURL}/votes`, body , {
         headers: postHeaders
      })
   } catch (error) {
      console.log(error)
   }}

export const addTofavourites = async (body:IFavoriteBody):Promise<any> => {
try {
   const request = await axios.post(`${rootURL}/favourites`, body, {
      headers: postHeaders
   })
} catch (error) {
   console.log(error)
}}


export const uploadPhoto = async (body:FormData) => {
   try {
     const request = await axios.post(`${rootURL}/images/upload`, body , {
      headers: {
         'Accept': 'image/*',
         'x-api-key' : key,
         'content-type': 'multipart/form-data'
      }
     })
   } catch (error) {
      console.log(error)
   }
} 

export const getUploadPhoto = async () => {
   try {
      const request = await axios.get(`${rootURL}/images`, {
         headers: headers
      });
      const respond = await request;
      return respond
      
   } catch (error) {
      console.log(error)
   }
}

export const getPhotoAnalysis = async (id:string) => {
   try {
       const request = await axios.get(`${rootURL}/images/${id}/analysis`, {
         headers: headers
       });
       const respond = await request;
       return respond;
   } catch (error) {
      console.log(error)
   }
}

export const getOneImage = async (id:string) => {
   try {
      const request = await axios.get(`${rootURL}/images${id}`, {
         headers: headers
      });
      const respond = await request;
      return respond
      
   } catch (error) {
      console.log(error)
   }
   
}