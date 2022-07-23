import React, { useEffect, useState } from 'react';
import { singleMapImage, IGridImagesProps } from '../types/propsTypes';

import GritTierOne from "./GridTierOne";
import GritTierTwo from "./GridTierTwo";
import LoadingSpinner from './LoadingSpinner';
import GalleryNavBTNS from './GalleryNavigationButtoms';

const TooManyPhotos = ( {images} : IGridImagesProps ):JSX.Element => {

const [imageChunks, setImageChunks] = useState<singleMapImage[][]>([]);
const [currentChunk, setCurrentChunk] = useState<number>(0);
const [loading, setLoading] = useState<boolean>(true);

useEffect(() => {
  let start: number = 0;
  let end: number = 0;
  const chunks:singleMapImage[][] = [];
 if (images.length !== 0) {
  images.map( (el:singleMapImage, id: number) => {
        start = id-20;
        end = id
        switch (id) {
          case (20) : 
          case (40) : 
          case (60) : 
          case (80) : 
          case (100) : 
          case (120) : 
          case (140) : 
          case (160) : 
          case (180) : 
          case (200) : 
          case (220) : 
          case (240) : 
          case (260) : 
          case (280) : 
          case (300) : 
          start = id-20;
          end = id;
          const newChunk:singleMapImage[] = images.slice(start, end);
          chunks.push(newChunk);
        }
    })
    setImageChunks(chunks);
    setLoading(false);
 }
},[images])

const fullrespond = ():JSX.Element => {

    return(
        <>
          <GritTierOne images = {imageChunks[currentChunk].slice(0, 5)} />
          <GritTierTwo images = {imageChunks[currentChunk].slice(5, 10)} />
          <GritTierOne images = {imageChunks[currentChunk].slice(10, 15)} />
          <GritTierTwo images = {imageChunks[currentChunk].slice(15, 20)} />
          {imageChunks.length >=2 && <GalleryNavBTNS currentID={currentChunk} amount={imageChunks.length} setChunk={setCurrentChunk}/>}
        </>
    )
}

return(
    <>
     {loading ? <LoadingSpinner/> : fullrespond()}
    </>
)
}

export default TooManyPhotos;