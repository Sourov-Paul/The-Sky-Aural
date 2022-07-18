import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/FirebaseInitialize";
import {signInWithEmailAndPassword , getAuth,signOut,onAuthStateChanged  , createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";


// Initialize Firebase App
initializeFirebase()
export const database=getFirestore(initializeFirebase())
export const storage=getStorage(initializeFirebase());



const useFirebase=()=>{
    
    const [user, setUser]=useState({})
   const [loading,setLoading]=useState(true)
   const [error,setError]=useState('')
   const [admin,setAdmin]=useState(false)

    const auth = getAuth();

    // registationUser handle
    const registerUser=(email,password,name, navigate)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(() => {
            setError('')
            const newUser = { email, displayName: name };
            setUser(newUser);
            saveUser(email,password,name)
                  //    send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          
          })
          navigate('/')
          .catch((error) => {
            setError(error.message)
          })
          .finally(()=>setLoading(false))
    }


  //    signIn handle============
  const loginUser = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };





  // save user database
  const saveUser=((email,password,displayName)=>{
    const user={email,password,displayName};
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(()=>{})
    .catch((error) => {
      setError(error.message);
    })
  })

// admin handle
useEffect(()=>{
  
  fetch(`http://localhost:5000/users/${user.email}`)
  .then(res=>res.json())
  .then(data=>setAdmin(data.admin))
  setLoading(false)

},[user.email])


// user state update handle
      useEffect(()=>{

        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
            setUser({})
            }
            setLoading(false)

          });

          return ()=>unsubscribe;
    },[auth])





    // handle logOut user
    const logOut=()=>{
        setLoading(true)
        signOut(auth).then(() => {
            setError("")
          }).catch((error) => {
            setError(error.message)          })
          .finally(()=>setLoading(false))

    }








return{
    user,
    admin,
    registerUser,
    loginUser,
    loading,
    error,
    logOut,
    database,
    storage
}



}

export default useFirebase;