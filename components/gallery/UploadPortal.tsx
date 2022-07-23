import styles from '../../styles/gallery.module.css';
import shared from '../../styles/sharedStyles.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IPortalProps } from '../../types/propsTypes';
import { IImageFeedback } from '../../types/commonTypes';
import { uploadPhoto, getUploadPhoto, getPhotoAnalysis} from '../../services/api';

import FileForm from './FileForm';


const UploadPortal = ( {setVisability} : IPortalProps ):JSX.Element => {

  const [isPhotoLoaded, setPhotoLoaded] = useState<boolean>(false);
  const [file, setFile] = useState<IImageFeedback[]>([]);
  const [photoHasSent, setPhotoHasSent] = useState<boolean>(false);
  const [fileToSend, setFileToSend] = useState<FormData>();
  const [photoId, setPhotoId] = useState<string>('');
  const [isDragActive, setISDragActive] = useState<boolean>(false);
  const [fileFromDrag, setFileFromDrag] = useState<any>(null);

  useEffect(() => {
    if (isPhotoLoaded) {
      getUploadPhoto()
      .then(data => {
        setFile(data.data);
        setPhotoId(data.data[0].id)
      })
    
    }
  }, [isPhotoLoaded])

  console.log(file)
  const loadedInformation = () => {
    if (!isPhotoLoaded) {
      return (
        <span>
        No File selected
        </span>
      )
    }

  }

  const loadedDisplay = () => {
      return (
        <div className={styles.photoWrapper}>
       { !isPhotoLoaded &&  <Image
        src="/images/Vector.png"
        alt="Picture of the author"
        width={200}
        height={200}
      /> }
       <FileForm file={file} setLoaded={setPhotoLoaded} setFile={setFile} setSendedPhoto={setPhotoHasSent}/>
        </div>
      )
  }

  const formHandler = (e:React.FormEvent<HTMLFormElement>) => {
   // Dog API docs shows one respond, i got another. So i have decided to add only succes status
    e.preventDefault();
   getPhotoAnalysis(photoId)   
   .then(data => {
    setFileToSend(data.data[0]);
    setPhotoHasSent(true);
    setFile([]);
    setPhotoLoaded(false);
   })
   
  }
    return(
        <div className={styles.portalWrapper}>
          <div className={styles.portalCard}>
          <div>
            <button onClick={() => setVisability(false)} style={{marginBottom: '40px', marginLeft: '93%'}} className={shared.rectangleSmall}>
            <Image
                src="/images/image-cross.png"
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </button>
            <div className={styles.contentBlock}></div>
            <div className={styles.portalCardContent}>
              <h2>Upload a .jpg or .png Dog Image </h2><br />
             <span> Any uploads must comply with the <a href="https://thecatapi.com/privacy">upload guidelines</a> or face deletion.</span>
            </div>
            <div 
            style={isDragActive === true ? {backgroundColor: 'rgba(255, 134, 142, 1)', borderColor: 'red'} : {}}
             className={styles.portalCardPhoto}>
              {loadedDisplay()}
            </div>
            { file.length !== 0 && 
            <form onSubmit={e => formHandler(e)} className={styles.photoForm}>
            <span> Image File Name: {`${file[0].original_filename}`}</span> 
            <button className={styles.uploadPhoto}>UPLOAD PHOTO</button>
            </form>}
            <div className={styles.portalCardStatus}>
              {loadedInformation()}
            </div>
            {photoHasSent && 
            <div className={styles.successRespond}>
                     <Image
                      src='/images/success-20.svg'
                      alt="Upload success"
                      width={30}
                      height={30}
                    />
                  <span>Thanks for the Upload - Dog found!</span>      
            </div>
            }
          </div>
          </div>
        </div>
    )
}

export default UploadPortal;