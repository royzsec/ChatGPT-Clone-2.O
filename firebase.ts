import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "API_KEY",
  
    authDomain: "",
  
    projectId: "",
  
    storageBucket: "",
  
    messagingSenderId: "ID",
  
    appId: "AP_ID"
  
  };
  
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};
