import React, { useLayoutEffect, useState, useEffect } from 'react';
import styles from '../styles/sharedStyles.module.css';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { backgroungColor } from '../services/common';
import { setWidth } from '../redux/slices/appReducer';

import LeftFixedMenu from './leftMainItem/LeftFixedMenu';

const Layout = ( {children} ):JSX.Element => {

    const router = useRouter();
    const dispatch = useDispatch();
    const theme = useSelector((state:RootState) => state.appReducer.isDarkTheme);
    const appWidth = useSelector((state:RootState) => state.appReducer.appWidth);
    const [isAdaptive, setIsAdaptive] = useState<boolean>(false);

    useEffect (() => {
      let width = window.innerWidth;
      if (width < 1600) {
        setIsAdaptive(true);
        dispatch(setWidth(width));
        return
      }
      dispatch(setWidth(width));
    },[])
 
    useLayoutEffect(() => {
     window.addEventListener('resize', () => {
         let width  = window.innerWidth;
         dispatch(setWidth(width));
         if (width < 1600) {
          setIsAdaptive(true);
          return;
         }
         if (width > 1600) {
          setIsAdaptive(false);
          return;
         }
      })
    })

   if (isAdaptive) {
    if (router.pathname === '/') {
      return(
        <>
        <main style={backgroungColor(theme)} className={styles.container}>  
            <LeftFixedMenu/>
        </main>
        </>
        )
    } else {
      return(
        <>
        <main style={backgroungColor(theme)} className={styles.container}>  
        <div style={backgroungColor(theme)} className={styles.containerItemRight}>
           {children}
         </div>
        </main>
        </>
        )
    }
   }

  return(
      <>
      <main style={backgroungColor(theme)} className={styles.container}>  
          <LeftFixedMenu/>
         <div style={backgroungColor(theme)} className={styles.containerItemRight}>
           {children}
         </div>
      </main>
      </>
      )
 }
export default Layout;
