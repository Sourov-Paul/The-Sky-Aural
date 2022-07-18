import React, {  useState } from 'react';


const MobilePost = () => {
    
            // sucess message
            const [sucess,setSucess]=useState(false)
            // error message
            const [error,setError]=useState('')
            const[image,setImage]=useState(null)

            console.log(image)
            

          
            const mobileHandle=e=>{
                if(!image){
                    return;
                }
              
               

                    // all data
                    const allMobileData={
                      
                        image
                    }
               console.log(allMobileData.image)
              
              
              
            //    fetch('https://theskyaural.herokuapp.com/mobileDetailsPost',{
               fetch('http://localhost:5000/check',{
                        method:'POST',
                        headers:{
                            'content-type':'multipart/form-data'
                        },
                        body:JSON.stringify(allMobileData)
                     })
                     .then(res=>res.json())
                     .then(data=>{
                         if(data.insertedId){
                             setSucess(true)
                           e.target.reset()
                         }
                     }).catch((error)=>{
                         setError(error)
                     })
           
                     e.preventDefault()
                
           

           
            }


    return (
        <div>

            <form onSubmit={mobileHandle} encType="multipart/form-data">
            
            <input type="file" name="avatar"multiple accept="image/*" 
            onChange={e=>setImage(e.target.files[0])}
            />
           
        <input type='submit'  value='Submit'/>
            </form>
            
        </div>
    );
};

export default MobilePost;