import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebse.config";



 const initializeFirebase=()=>{
    
    initializeApp(firebaseConfig)
}

export default initializeFirebase;