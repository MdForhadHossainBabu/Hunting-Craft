import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKD-sCr11esam2jO_rZubhf4eDMcw2LNQ',
  authDomain: 'assignment-10-artcraft.firebaseapp.com',
  projectId: 'assignment-10-artcraft',
  storageBucket: 'assignment-10-artcraft.appspot.com',
  messagingSenderId: '479555035161',
  appId: '1:479555035161:web:e0ded5f3e5eb6d6d2a0a88',
};

// Initialization of Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;