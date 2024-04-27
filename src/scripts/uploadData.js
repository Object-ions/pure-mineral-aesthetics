// This file will contain the script for uploading your JSON data to Firebase Firestore.

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');
const fs = require('fs');

// Since your Firebase.config.js uses environment variables, make sure they are set in your Node.js environment or load them using a package like dotenv
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

// Read the JSON file - ensure you have the correct path to your JSON file
const jsonFilePath = './src/data/product_scraper.json';
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Helper function to upload data to Firestore
const uploadData = async (collectionName, data) => {
  const collectionRef = collection(db, collectionName);

  const promises = data.map(async (item) => {
    const docRef = doc(collectionRef);
    return setDoc(docRef, item);
  });

  return Promise.all(promises);
};

// Upload data to Firestore
uploadData('products', jsonData)
  .then(() => console.log('Data successfully uploaded to Firestore'))
  .catch((error) => console.error('Error uploading data to Firestore:', error));
