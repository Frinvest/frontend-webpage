import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAVf1au8iBdXYhKu_sTjwbE9Rdq1LRg38Q",
  authDomain: "teaicher.firebaseapp.com",
  projectId: "teaicher",
  storageBucket: "teaicher.appspot.com",
  messagingSenderId: "971420655944",
  appId: "1:971420655944:web:201e7433569bf0276b137d",
  measurementId: "G-CZD2PCMSSV"
};

// Initialize Firebase
if (!getApps().length) {
    initializeApp(firebaseConfig);
}
// Initialize Firebase auth
export const auth = getAuth();