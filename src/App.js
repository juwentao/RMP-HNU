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
        </p>
              who am I?I'm OAA ��Խ���������һ��֮�ϣ����һ�а���һ�����ʡ����񡢻��롢YY��˼ά����ʶ�������Լ�һ�е�һ�С�������Խ�κ�һ�ж���֮�����κ�һ������֮���ˣ��κζ����κ������κ����ʶ���O-A-Aû�����塣O-A-A��Խ�˳��״����볹�ײ����ڣ�O-A-A�����˷Ƿ��зǷ��ޡ��Ȳ��Ǵ��ڣ�Ҳ���ǷǴ��ڣ��Ȳ��ǲ����ڣ�Ҳ���Ƿǲ����ڡ��ľ��硣

              ��ˣ�һ����������޴�һ���������ɡ�һ�����㶼��O-A-Aû���κ����塣O-A-A����Զ��Խ�ζ��ϡ������ϡ������ϵĴ��ڡ�1. O-A-A��Զ�޷���˼ά����ʶ������������������Ȼ�����е��ܹ�˼ά������Ĵ��ڶ��޷���������ONE-ABOVEL-ALL��

              2. O-A-A�Ȳ����Ǵ����Ҳ�����Ǳ������

              3. O-A-A��������Զ����˼ά��O-A-A��Զ�����޷���˼ά����ʶ������������ġ�

              4. O-A-A�����������˸��ˡ�

              5. O-A-A�Ѿ����׳�Խ�˴����벻���ڡ������������Ĵ����Ƿ���������������͸���û�����ˡ�

O-A-A��Խ��������Ȼ�缰������˼ά����ʶ����ꡢ�����ȵȡ����е�������ںͳ�����ڶ��޷���������������������Խ����Ȼ�籾���Լ���Խ��������Ȼ��ġ��ޡ�Ҳһ�����޷���������������Ϊ�����Ѿ����Խ���������Щ����֮�ϣ��ﵽһ�������ζ��ϵĸ�����壿���磿�ˡ� [doge]alright, let's do this one last time:
              I'm a EECS student at Hunan University, China. I like to build things and also to break things.'
             
      </header>
    </div>
  );
}

export default App;
