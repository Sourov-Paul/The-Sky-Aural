import './MobilePost.css';
import React, { useRef, useState } from 'react';


const MobilePost = () => {
    
            // sucess message
            const [sucess,setSucess]=useState(false)
            // error message
            const [error,setError]=useState('')
            const[image,setImage]=useState(null)

            const nameRef=useRef()
            const titleRef=useRef()
            const price1Ref=useRef()
            const price2Ref=useRef()
            const ram1Ref=useRef()
            const ram2Ref=useRef()
            const color1Ref=useRef()
            const color2Ref=useRef()
            const videoLinkRef=useRef()
            

          
            const mobileHandle=e=>{
                if(!image){
                    return;
                }
                const mobileName=nameRef.current.value;
                const mobileTitle=titleRef.current.value;
                const mobilePrice1=price1Ref.current.value;
                const mobilePrice2=price2Ref.current.value;
                const mobileRam1=ram1Ref.current.value;
                const mobileRam2=ram2Ref.current.value;
                const mobileColor1=color1Ref.current.value;
                const mobileColor2=color2Ref.current.value;
                const mobileVideoLink=videoLinkRef.current.value;
               

                    // all data
                    const allMobileData={
                        mobileName,
                        mobileTitle,
                        mobilePrice1,
                        mobilePrice2,
                        mobileRam1,
                        mobileRam2,
                        mobileColor1,
                        mobileColor2,
                        mobileVideoLink,
                        image
                    }
              
              
              
            //    fetch('https://theskyaural.herokuapp.com/mobileDetailsPost',{
               fetch('http://localhost:5000/mobileDetailsPost',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
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

            <form onSubmit={mobileHandle} enctype="multipart/form-data">
            <input ref={nameRef} type="text" required   name='name' placeholder='Mobile Name'/>
            <br/>
            <input ref={titleRef} type='text' required  name='title' placeholder='Title' />
            <br/>
            <input ref={price1Ref} type='number' required  name='price1' placeholder='Price-1'/>
            <br/>
            <input ref={price2Ref} type='number'  name='price2' placeholder='Price-2'/>          
            <br/>
            <input ref={ram1Ref} type='number'required  name='RAM1' placeholder='RAM-1'/>          
            <br/>
            <input ref={ram2Ref} type='number'  name='RAM2' placeholder='RAM-2'/>          
            <br/>
            <input ref={color1Ref} type='text' required  name='color1' placeholder='Color-1' />
            <br/>
            <input ref={color2Ref} type='text'  name='color2' placeholder='Color-2' />
            <br/>
            <input ref={videoLinkRef} type='text'  name='videoLink' placeholder='Video link' />
            <br/>
            <input type="file" name="avatar"multiple accept="image/*" 
            onChange={e=>setImage(e.target.files[0])}
            />
           
        <input type='submit'  value='Submit'/>
            </form>
            
        </div>
    );
};

export default MobilePost;