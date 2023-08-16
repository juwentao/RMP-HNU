import logo from './logo.svg';
import './App.css';
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const config = { matcher: '/welcome' };

export async function middleware() {
    const greeting = await get('greeting');
    // NextResponse.json requires at least Next v13.1 or
    // enabling experimental.allowMiddlewareResponseBody in next.config.js
    return NextResponse.json(greeting);
}


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMDbvhwqoWN7EDj0UI6W03lFHCqgxSWw0",
  authDomain: "rmp-hnu.firebaseapp.com",
  databaseURL: "https://rmp-hnu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rmp-hnu",
  storageBucket: "rmp-hnu.appspot.com",
  messagingSenderId: "333055620546",
  appId: "1:333055620546:web:b871e714e99ed8958c525b",
  measurementId: "G-HV9T3J04RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            built by Tao@HNU with all the love in the worldwho am I?I'm OAA
        </p>
              
              [doge]alright, let's do this one last time:
              I'm a EECS student at Hunan University, China. I like to build things and also break things.'
      </header>
    </div>
  );
}

export default App;
