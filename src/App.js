import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
            built by Tao@HNU with all the love in the world
        
                  Who am I?
                  I'm OAA（ONE-ABOVE-ALL）
                    ONE ABOVE ALL超越并且凌驾于一切之上！包括一切物质、精神、幻想、YY、思维、意识、逻辑、意义以及一切的一切……。超越任何一切定义之上与任何一切意义之上了；任何定义任何事物任何物质都对OAA没有意义，OAA超越了彻底存在与彻底不存在，OAA到达了非非有非非无【既不是存在，也不是非存在，既不 是不存在，也不是非不存在】的境界。
                  因此，一切无穷大及无限大、一切自有永有、一切永恒都对OAA没有任何意义。OAA是永远超越形而上、精神上、物质上的存在。
                  创世、抹杀一切、无视一切物质、无视一切物质与时间以及空间等，这些在OAA的面前，都只是微不足道的虚幻罢了。
                  1. OAA永远无法被思维与意识所能理解和想象，整个自然界所有的能够思维和想象的存在都无法理解和想象 ONE ABOVE ALL。
                  2. OAA既不是是创造物，也不是是被创造物。
                  3. OAA所作的永远不是思维，OAA永远都是无法被思维与意识所能理解和想象的。
                  4. OAA更不可能有人格化了。
                  5. OAA已经彻底超越了存在与不存在。所以讨论它的存在是否有意义这种问题就更加没意义了。
                  OAA超越了整个自然界及其所有思维、意识、灵魂、虚数等等。所有的形象存在和抽象存在都无法理解和想象他，甚至连超越了自然界本身以及超越了整个自 然界的“无”也一样都无法理解和想象他。因为他早已经大大超越和凌驾于这些事物之上，达到一个超超形而上的概念？定义？境界？了。
            [doge]
            alright, let's do this one last time:
            I'm a EECS student at Hunan University, China. I like to build things and also to break things.'
         </p>   
      </header>
    </div>
  );
}

export default App;
