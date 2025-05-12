
import {useEffect,useState} from "react"
import { useParams } from "react-router"
import EditBook from "./editBook"
import styles from './css files/librarydetails.module.css'
export default function LibraryBookDetails(){

  const[book,setBook] = useState({});
  

  const[dialog,setDialog] = useState(false);
 

  function openDialog(){
    setDialog(true)
  
  }
  function closeDialog(){
    window.location.reload();
  setDialog(false)
  }

   

  const {id} = useParams()
  
   
   useEffect(() => {
     fetch(`http://localhost:3000/librarybooks/${id}`)
    .then(
        res => {
            if(!res.ok){
             throw new Error("cant fetch book")
            }
            return res.json()
        }
    )
    .then(
        book => {
            console.log("Fetched book:", book);
            setBook(book)
        }
    ).catch(err => {
        console.log(err.message)
    })
   },[id])

   console.log(id)
    return(
        <>
        
        <div className={styles.main}>
        <button className={styles.editbutton} onClick={openDialog}>Edit Book</button>
          <h1 className={styles.header}>{book.title}</h1>
        <img className={styles.books} src={book.cover} height={470} width={350} alt=""/>
         <div className={styles.details}>
        <label className={styles.description}>
          <h4>Description</h4>
          <p>{book.description}</p>
        </label>
        <label className={styles.description}>
          <h4>Author</h4>
          <p>{book.description}</p>
        </label>
        <label className={styles.description}>
          <h4>Published</h4>
          <p>{book.description}</p>
        </label>
        </div>

           
       
       
       {dialog && <dialog className={styles.dialog} open>
       <EditBook Title={book.title} Description={book.description} Image={book.cover} closeDialog={closeDialog}/>
       </dialog>
       }
       </div>
        </>
    )
}