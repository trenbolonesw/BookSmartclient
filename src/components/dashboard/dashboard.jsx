import { useState,useEffect } from "react"
import { Link } from "react-router"
import styles from './dashboard.module.css'
export default function DashBoard(){
 const [bookData,setBooks] = useState({books:[]})
 const [err,setError] = useState(null)
 const [loading,setLoading] = useState(true)
  useEffect(() => {
      fetch('http://localhost:3000/librarybooks').then(
       res => {
         if(!res.ok){
            throw new Error("could not fetch books")
         }
         return res.json()
       } 
      ).then(
        bookData => {
            setBooks(bookData)
            setLoading(false)
            setError(null)
        }    
      ).catch( err=> {
        setLoading(false)
           setError("failed to fetch books")
      })
  },[])

    return (
        <>
        <div className={styles.dashboard}>
               <div className={styles.header}>
               <h1>Book<strong>Smart</strong> DashBoard</h1>
               </div>
               <div className={styles.dashboardmain}>
               <div className={styles.statsboard}>
                <h3>Total BookCount</h3>
                     <strong>count</strong>
               </div>
               <div className={styles.statsboard}>
                <h3>Categories</h3>
                   
                 <li>count</li>
                 <li>count</li>
                 <li>count</li>
                 <li>count</li>
               </div>
               <div className={styles.statsboard}>
                <h3>Downloads this year</h3>
                list of every month
               </div>
               </div>
               <h2><Link to={'/DashBoard/AddBook'}>add book</Link></h2>
            <h3>Books</h3>
            <main className={styles.booksTable}>
                {err && <h1>{err}</h1>}
                 {loading && <h1>loading...</h1>} 
                           
              {bookData.books.map(book => 
                    (
                        <div key={book.id}>
                        <Link to={`/LibraryBook/${book.id}`}>
                        <img src={book.cover} height={350} width={250} alt=""/>
                        <h3>{book.title}</h3>
                        </Link>
                        </div>
                    )
                 )}    
                            
            </main>
            
        </div>
      
        </>
    )
}

