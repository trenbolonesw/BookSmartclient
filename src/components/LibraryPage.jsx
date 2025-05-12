

import styles from './Library.module.css'
import { Link } from 'react-router';
import { useState,useEffect } from 'react'
export default  function LibraryPage(){
   
    const [data,setData] = useState({books:[]});
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

          useEffect(() => {


              
            fetch('http://localhost:3000/librarybooks').then(
             res => {
            
                if(!res.ok){
                    throw Error("could not fetch library data")
                }
              return res.json()
             }
            
            ).then(
                data => {
                    setData(data)
                    setLoading(false)
                    setError(null)
                }
            ).catch(err => {
                setLoading(false)
                setError(err.message)
            })

          
       
          },[])


    return(
        <div className={styles.background}>
        <div>
           
            <h1>Library</h1>
            <main className={styles.main}>
              {error && <><div>{error}</div></>}
                {loading && (<p>loading...</p>)} 
               
  {data.books.map(book => (
                  <div  key={book.id}>
                    <Link to={`/LibraryBook/${book.id}`}>
                    <img src={book.cover} alt="" className={styles.image} height={350} width={250}/>
                <p key={book.id}>{book.title}</p>
                    </Link>
                </div>
            ))}
                 </main>
                
          
          
        </div>
        </div>
    )
}
