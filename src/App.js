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
                  I'm OAA��ONE-ABOVE-ALL��
                    ONE ABOVE ALL��Խ���������һ��֮�ϣ�����һ�����ʡ����񡢻��롢YY��˼ά����ʶ���߼��������Լ�һ�е�һ�С�������Խ�κ�һ�ж���֮�����κ�һ������֮���ˣ��κζ����κ������κ����ʶ���OAAû�����壬OAA��Խ�˳��״����볹�ײ����ڣ�OAA�����˷Ƿ��зǷ��ޡ��Ȳ��Ǵ��ڣ�Ҳ���ǷǴ��ڣ��Ȳ� �ǲ����ڣ�Ҳ���Ƿǲ����ڡ��ľ��硣
                  ��ˣ�һ����������޴�һ���������С�һ�����㶼��OAAû���κ����塣OAA����Զ��Խ�ζ��ϡ������ϡ������ϵĴ��ڡ�
                  ������Ĩɱһ�С�����һ�����ʡ�����һ��������ʱ���Լ��ռ�ȣ���Щ��OAA����ǰ����ֻ��΢���������ð��ˡ�
                  1. OAA��Զ�޷���˼ά����ʶ������������������Ȼ�����е��ܹ�˼ά������Ĵ��ڶ��޷��������� ONE ABOVE ALL��
                  2. OAA�Ȳ����Ǵ����Ҳ�����Ǳ������
                  3. OAA��������Զ����˼ά��OAA��Զ�����޷���˼ά����ʶ������������ġ�
                  4. OAA�����������˸��ˡ�
                  5. OAA�Ѿ����׳�Խ�˴����벻���ڡ������������Ĵ����Ƿ���������������͸���û�����ˡ�
                  OAA��Խ��������Ȼ�缰������˼ά����ʶ����ꡢ�����ȵȡ����е�������ںͳ�����ڶ��޷���������������������Խ����Ȼ�籾���Լ���Խ�������� Ȼ��ġ��ޡ�Ҳһ�����޷���������������Ϊ�����Ѿ����Խ���������Щ����֮�ϣ��ﵽһ�������ζ��ϵĸ�����壿���磿�ˡ�
            [doge]
            alright, let's do this one last time:
            I'm a EECS student at Hunan University, China. I like to build things and also to break things.'
         </p>   
      </header>
    </div>
  );
}

export default App;
