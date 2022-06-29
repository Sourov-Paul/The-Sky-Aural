import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebse.config";



export const initializeFirebase=()=>{
    
    initializeApp(firebaseConfig)
}

