import React, { useEffect, useState } from 'react';
import Mobile from './Mobile/Mobile';
import './MobileShop.css';

const MobileShop = () => {

    const [allMobileShop,setAllMobileShop]=useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/mobileDetailsPost')
        .then(res=>res.json())
        .then(data=>setAllMobileShop(data))
    },[])


  
    
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }




let total=0;
for(const product of cart){
    total=total+parseInt(product.mobilePrice2)
}




    return (
        <div>
            <h2>All Product:{allMobileShop.length} </h2>
        <h2>Cart {cart.length}</h2>
       
       <h3>Total{total}</h3>
       
       
        {
        allMobileShop?.map((product)=>(<div >
        <div className='col-sm-6 col-md-4 col-lg-3'>
        <Mobile
         key={product._id}
          product={product}
          handleAddToCart={handleAddToCart}
          />
        </div>
     </div>))
        }


        </div>
    );
};

export default MobileShop;