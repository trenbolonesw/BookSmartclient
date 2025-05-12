import { useRef,useState,useEffect } from "react";
import styles from './css files/imagepicker.module.css'
export default function ImagePicker({image,setImage}){

    const [preview,setPreview] = useState(image);
 
     const ref = useRef();
   
      function handleButton(){
      ref.current.click();
      }
   
      function handleImage(event){
       const file = event.target.files[0];
          
       if (!file) {
           setImage(null)
       
           return;
         }
      setImage(file)
    
 
 
       const fileReader = new FileReader();
   
       fileReader.onload = () => {
          setPreview(fileReader.result)
 
       }
   
       fileReader.readAsDataURL(file);
   
      }
       
      useEffect(() => {
         if (!image) {
           setPreview(null);
           return;
         }

         if(typeof image === 'string'){
          setPreview(image)
          return;
         }

         
     
         
     
         const fileReader = new FileReader();
         fileReader.onload = () => {
           setPreview(fileReader.result);
         };
         fileReader.readAsDataURL(image);
       }, [image]);
     
   
       return (
           <div className={styles.main}>
               <div>
                   {!preview && <p>No book cover choosen yet</p>}
                    {preview && <img className={styles.image} src={preview} alt=""/>}
               </div>
               <label>Book Cover</label>
               <div>
               <input 
               className={styles.input}
               name='name'
              ref={ref} aria-label='label' type='file' 
               accept='image/png,image/jpeg ' onChange={handleImage}/>

              
               <button type='button' onClick={handleButton} className={styles.selectbutton}>Select</button>
               </div>
           </div>
       )
   }

   // to accept pdf files accept="application/pdf"