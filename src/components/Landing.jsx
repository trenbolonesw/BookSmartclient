import styles from './landing.module.css'
import { Link } from 'react-router'

export default function LandingPage(){
    return(
        <>
     
        
             
        <div className={styles.background}>
        
            <main className={styles.main} >
               <h1 className={`${styles.header}`}>
                <p className={styles.h03} >welcome to BookSmart</p></h1> 

                
            </main>
            <main className={styles.main2}>
                <h1 className={styles.h02}><Link to="/DashBoard"className={`${styles.h1link}`}>Dashboard</Link></h1>
                <h1 className={styles.h01}><Link to="/About"className={`${styles.h1link}`}> About</Link></h1>
                <h1 className={styles.h01}><Link to="/LibraryPage"  className={styles.h1link}>Search Library</Link></h1>
                <h1 className={styles.h02}><Link to="/SuggestBook" className={styles.h1link}>Suggest Book</Link></h1>
               <h1 className={styles.h02}><Link to="/admin" className={styles.h1link}>SignUp</Link></h1>
            </main>
            
        </div>
        
       
        </>
    )
}