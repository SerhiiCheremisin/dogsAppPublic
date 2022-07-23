import type { NextPage } from 'next';
import styles from '../styles/sharedStyles.module.css';

//components
import HomePagePhoto from '../components/HomePhoto';
import Head from 'next/head';

 
const Home: NextPage = ():JSX.Element => {
  return (
    <>
    <Head>
      <title>Dogs app by Serhii Cheremisin</title>
      <meta name="description" content={`This main page. Check further for details`}/>
    </Head>
     <div>
      <HomePagePhoto/>
     </div>
    </>

  )
}

export default Home
