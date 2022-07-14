import type { NextPage } from 'next';
import styles from '../styles/sharedStyles.module.css';

//components
import FixedMenu from '../components/leftMainItem/LeftFixedMenu';
import HomePagePhoto from '../components/HomePhoto';

const Home: NextPage = ():JSX.Element => {
  return (
    <>
      <HomePagePhoto/>
    </>
  )
}

export default Home
