import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    
    const handleOnBlur=e=>{
        setEmail(e.target.value)
    }
    
       
    
    const handleAdminSubmit=e=>{
        const user={email}
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                
                setSuccess(true)
            }

        })
        
        
        
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
           
            <input
            onBlur={handleOnBlur}
             required 
             type='email'
              placeholder='Users Email' />
            
            <button >Make Admin</button>
            </form>
            {success && <span>Made admin success</span>}
        </div>
    );
};

export default MakeAdmin;