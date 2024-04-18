import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'Get your Keys from Firebase firestore',
  authDomain: 'Get your Keys from Firebase firestore',
  projectId: 'Get your Keys from Firebase firestore',
  storageBucket: 'Get your Keys from Firebase firestore',
  messagingSenderId: 'Get your Keys from Firebase firestore',
  appId: 'Get your Keys from Firebase firestore',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
