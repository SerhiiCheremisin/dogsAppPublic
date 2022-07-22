import React, { useState } from 'react';
import styles from '../../styles/gallery.module.css';
import Image from 'next/image';
import { uploadPhoto } from '../../services/api';

import { IFileFormProps } from '../../types/propsTypes';

const FileForm = ( {setLoaded, setFile, setSendedPhoto, file}:IFileFormProps ) :JSX.Element => {


    const uploadHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files[0] !== undefined) {
            const data = new FormData();
            data.append('file', e.target.files[0])
            uploadPhoto(data);
            setLoaded(true);
        } 
    }

    const onFileDrop = (e:React.ChangeEvent<HTMLInputElement>) => {
       console.log(e)
        if (e.target.files[0] !== undefined) {
        const newFile = new FormData();
        newFile.append('file', e.target.files[0])
        console.log(`Event is : ${e}`)
            uploadPhoto(newFile);
            setLoaded(true);
    }
       } 

if (file.length !== 0) {
    return(
        <>
       <Image
        src={`${file[0].url}`}
        alt="Photo to upload"
        width={600}
        height={300}
      />
        </>
    )
}
return(
   <div className={styles.textOver}>
        <strong>Drag here</strong> <input className={styles.dragInput} onChange={e => onFileDrop(e)} value="" type="file" /> your file or 
        <label htmlFor="fileAdder"><strong>Click here</strong></label> <input className={styles.clickInput} onChange={(e:any) => uploadHandler(e)} id='fileAdder' type="file" /> 
        to upload
   </div>
)

}

export default FileForm;