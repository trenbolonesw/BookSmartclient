import styles from './create.module.css'
import ImagePicker from './ImagePicker'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
export default function CreateBook(){
    const [image,setImage] = useState(null)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [loading,setLoading] = useState(false)

    const nav = useNavigate()

            function handleSubmit(e){


              
                e.preventDefault();

                
                const formData = new FormData();

                formData.append('title',title)
                formData.append('description',description)
               
              formData.append('image',image)
              console.log("Sending image file:", image); 
            setLoading(true)

            console.log("Sending image file:", image);
            console.log("Image is a File?", image instanceof File);
            console.log("FormData entries:");
            for (let pair of formData.entries()) {
              console.log(pair[0], pair[1]);
            }

      fetch('http://localhost:3000/createbook',{
            method:"POST",
            body: formData,
        }).then(() => {
            console.log("Sending image file:", image);
console.log("FormData entries:");
for (let pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}
            console.log("book added!")
            setLoading(false)
  
        }).then(() => {
           nav('/DashBoard')
        })

        
    }
  


    return(
        <>
        <div>
        <h2>Add a new Book</h2>
        <form onSubmit={handleSubmit}className={styles.Form} >
        <ImagePicker image={image} setImage={setImage}/>
            <label>Title</label>
            <input aria-label='label' type='text' onChange={(e) => setTitle(e.target.value)}/>
            <label>Description</label>
            <input aria-label='label'  type='text' onChange={(e) => setDescription(e.target.value)}/>
            <label>Author</label>
            <input aria-label='label' type='text' name='author'/>
           { !loading && <button>Create Book</button>}
           {loading && <button disabled>Loading..</button>}
           
        </form>
        </div>
        </>
    )
}

