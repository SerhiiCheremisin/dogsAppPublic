import axios from "axios";
import { IVotingBody } from '../types/commonTypes';

const key: string = 'd511b983-925b-4e7c-898c-7121fd270b9c';
const rootURL: string = 'https://api.thedogapi.com/v1';
const headers = {
   'x-api-key' : key
}
const postHeaders = {
   'x-api-key' : key,
   'content-type': 'application/json'
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

export const addTofavourites = async (body:any) => {
try {
   const request = await axios.post(`${rootURL}/favourites`, body, {
      headers: postHeaders
   })
} catch (error) {
   console.log(error)
}}
