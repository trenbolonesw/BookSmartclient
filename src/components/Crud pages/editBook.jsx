import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ImagePicker from "./ImagePicker";
import styles from './edit.module.css'
export default function EditBook({Title,Description,Image,closeDialog}){

  const {id} = useParams()

  
  
 
 const [bookImage,setPickedImage] = useState(null)
 const [title,setTitle] = useState('')
 const [description,setDescription] = useState("")

 
 

   
 

   useEffect(() => {
    setDescription(Description || "")
       setTitle(Title || "")
       setPickedImage(Image||null)

      
   
   },[Description,Title,Image])


      function handleSubmit(e){

         e.preventDefault();
           const formData = new FormData();
              let image = Image;
           if(bookImage instanceof File){
            image = bookImage;
            formData.append('image',bookImage)
           }
          
           formData.append('title',title)
           formData.append('description',description)
         
        
         fetch(`http://localhost:3000/createbook/${id}`,{
            method:"PATCH",
            body: formData,
         }).then(() => {
            console.log(image)
            
         })
      }



  

    return(
        <>
       
         <div className={styles.main}>
        <h2>Edit book</h2>
        <form className={styles.Form} onSubmit={handleSubmit}>
          
            <ImagePicker image={bookImage} setImage={setPickedImage}/>
             <div className={styles.textform}>
             <label>Title</label>
            <input 
            className={styles.title}
            aria-label="l" 
            onChange={(e) => setTitle(e.target.value)} value={title}/>
             <label>Description</label>
            <textarea 
             className={styles.textfield}
            aria-label="l" onChange={(e) => setDescription(e.target.value)} value={description}/>
              <label>Author</label>
              <input aria-label="l" className={styles.input} />
              <label>Date published</label>
              <input aria-label="l" type="date" className={styles.input}/>
              <button className={styles.updatebutton}>Update</button>
              <button onClick={closeDialog} className={styles.closebutton}>close</button>
              </div>
           
        </form>
        </div>
        
       
        </>
    )
}