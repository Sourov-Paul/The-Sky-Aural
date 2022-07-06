import React, { useState } from "react";
import UseAuth from "../../../Hooks/useAuth";
import "./Login.css";
import { useLocation,useNavigate } from 'react-router-dom';



const Login = () => {

    const [loginData,setLoginData]=useState({})
    const {loginUser,user,loading,error}=UseAuth()

    // redirect after login
    const location=useLocation();
    const navigate=useNavigate()

    const handleOnBlur=e=>{
        const field=e.target.name
        const value=e.target.value;
       const newLoginData={...loginData}
       newLoginData[field]=value
        setLoginData(newLoginData)
    }





    // handle login
    const handleLoginSubmit=e=>{

      loginUser(loginData.email,loginData.password,location,navigate)

        e.preventDefault()
    }
   

  return (
    <div>
      <h2>Login Form</h2>

     { !loading && <form onSubmit={handleLoginSubmit}>
        <div className="container">
          <label for="email">
            <b>Username</b>
          </label>
          <br />{" "}
          <input
          onBlur={handleOnBlur}
            type="email"
            placeholder="Enter Username"
            name="email"
            required
          />
          <br />
          <label for="password">
            <b>Password</b>
          </label>
          <br />
          <input
          onBlur={handleOnBlur}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />
          <button type="submit">Login</button>
        </div>
      </form>}
      {
        loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      }
      {user?.email && <h1>Success</h1>}
{error && <h2>{error}</h2>}
    </div>
  );
};

export default Login;
