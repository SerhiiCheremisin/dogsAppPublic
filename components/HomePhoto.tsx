import Image from 'next/image'
import styles from '../styles/sharedStyles.module.css';
const HomePagePhoto = ():JSX.Element => {

  return(
      <section>
         <div style={{height: '96vh'}} className={styles.frontGroundForPhoto}>
          <Image
          src="/images/girl-and-pet.png"
          alt="Picture of the author"
          width={900}
          height={900}
         />
      <div className={styles.backgroundForPhoto}>
        </div>
        </div>
     
      </section>
  )
}

export default HomePagePhoto;