import type { NextPage } from 'next';
import styles from '../styles/sharedStyles.module.css';

//components
import FixedMenu from '../componnts/leftMainItem/LeftFixedMenu';
import HomePagePhoto from '../componnts/HomePhoto';

const Home: NextPage = ():JSX.Element => {
  return (
    <>
      <HomePagePhoto/>
    </>
  )
}

export default Home
