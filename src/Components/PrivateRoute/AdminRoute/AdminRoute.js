import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../../Hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,isLoading,admin}=UseAuth();
    let location=useLocation()
   
    if  (isLoading) {
        return <div className="main-loading d-flex align-items-center mt-5">
        <div className="ring mt-5"></div>
        <div className="ring mt-5"></div>
        <div className="ring mt-5"></div>
        <p className='text-dark'>Loading...</p>
      </div>
    }
    if(user.email && admin){
        return children;
    }
    return <Navigate to="/" state={{from:location}}/>



    
};

export default AdminRoute;
