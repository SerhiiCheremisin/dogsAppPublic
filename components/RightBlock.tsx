import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { backgroungColor, backgroungColorAlt, backgroungColorRose } from '../services/common';
import styles from '../styles/sharedStyles.module.css';

const RightBlock = ( {children, ...props} ):JSX.Element => {

    const {type, color} = props;
    const theme = useSelector((state:RootState) => state.appReducer.isDarkTheme);

    if(type === 'float') {
       if (color === 'regular')
        return(
            <div style={backgroungColor(theme)} className={styles.rightWrapper}>
             {children}
            </div>
        )
       if (color === 'alt') {
        return(
            <div style={backgroungColorAlt(theme)} className={styles.rightWrapper}>
             {children}
            </div>
        )
       }
       if (color === 'rose') {
        return(
            <div style={backgroungColorRose(theme)} className={styles.rightWrapper}>
             {children}
            </div>
        )
       }
    }

    if (type === 'fixed'){
        if (color === 'regular') {
           const customStyle = theme ? {
            backgroundColor: 'black' , 
            height: '88vh'
        }
        :
        {
            height: '88vh'
        }
            return(
                <div style={customStyle} className={styles.rightWrapper}>
                 {children}
                </div>
            )
        }
       if (color === 'alt') {
        const customStyle = theme ? {
            backgroundColor: '#343434' , 
            height: '88vh'
        }
        :
        {
            height: '88vh'
        }
        return(
            <div style={customStyle} className={styles.rightWrapper}>
             {children}
            </div>
        )
       }
       if (color === 'rose') {
        const customStyle = theme ? {
            backgroundColor: '#533B3C' , 
            height: '88vh'
        }
        :
        {
            height: '88vh'
        }
        return(
            <div style={customStyle} className={styles.rightWrapper}>
             {children}
            </div>
        )
       }
    }
     
    return(
        <div className={styles.rightWrapper}>
         {children}
        </div>
    )
}

export default RightBlock;