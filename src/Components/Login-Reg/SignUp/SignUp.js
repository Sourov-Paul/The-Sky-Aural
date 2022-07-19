import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/useAuth";
import "./SignUp.css";

const SignUp = () => {
  const [regData, setRegData] = useState({});

  const {user,error, registerUser,loading } = UseAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...regData };
    newLoginData[field] = value;
    setRegData(newLoginData);
    console.log(newLoginData)
  };

  // handle login
  // Submit form
  const handleLogSubmite = (e) => {
    if (regData.password !== regData.password2) {
      alert("pas not match");
      return;
    }

    registerUser(regData?.email, regData?.password);
    e.preventDefault();
  };

  return (
    <>
    

{/* ========================= */}
{ !loading &&<div className="mainSignUp">
   <section className="register">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="card register__card">
                <img
                  className="img-fluid register__card-img"
                  src='https://i.ibb.co/CsG3X0z/auth.jpg'
                  alt="food"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <div className="register__card-layer">
                    <div className="col-10 m-auto">
                      <div className="register__card-logo">
                        <a href="/">
                          <img
                            className="img-fluid register__card-logo--img"
                            src='https://i.ibb.co/6Pc68GB/logo.png'
                            alt="logo"
                          />
                        </a>
                      </div>
                      <div className="register__card-body">
                        <div className="register__card-body--middle">
                          <span className="register__card-body--textSmall">
                            welcome to
                          </span>

                          <span className="register__card-body--text">
                            my e-commerce website
                          </span>

                          <p className="register__card-body--para m-0">
                            I am glad to see you again! Get access to your
                            Orders, Wishlist and Recommendations.
                          </p>
                        </div>
                        <div className="register__card-body--bottom">
                          <span className="register__card-body--span">
                            Already have an account?
                          </span>
                          <Link
                            to="/login"
                            className="register__card-body--link"
                          >
                            sing in
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xxl-4 m-auto my-4 my-lg-auto">
              <h1 className="register__title">register</h1>

              <form   onSubmit={handleLogSubmite}>
                <div className="mb-3">
                  <label htmlFor="name" className="register__sub">
                    name
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control register__inp"
                    placeholder="Enter Your Name"
                    onBlur={handleOnBlur}
                    type="name"
                    name="name"
                   
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="register__sub">
                    email
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control register__inp"
                    placeholder="Enter Your Email"
                    onBlur={handleOnBlur}
                    type="email"
                    name="email"
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="register__sub">
                    password
                  </label>
                  <input
                  autoComplete="off"
                    className="form-control register__inp"
                    placeholder="Enter Your Password"
                    onBlur={handleOnBlur}
                    type="password"
                    name="password"   
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm password" className="register__sub">
                    confirm password
                  </label>
                  <input
                  autoComplete="off"
                    className="form-control register__inp"
                    placeholder="Confirm Password"
                    required
                    onBlur={handleOnBlur}
                    type="password"
                    name="password2"
                    
                  />
                </div>

                <div className="register__forgot">
                  <Link to="/" className="register__sub register__forgot-text">
                    forgot password
                  </Link>
                </div>
                <div className="register__button">
                  <button type="submit"className="btn register__button-btn form-control">Button</button>
                </div>
              </form>
              {
        loading && <div className="lds-roller">Loading....</div>
      }
      {/* success alert */}
      {user?.email && <h1>Success</h1>}
{error && <h2>{error}</h2>}
              {/* <Social /> */}
            </div>
          </div>
        </div>
      </section>
   </div>}
    </>
  );
};

export default SignUp;
